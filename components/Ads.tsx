"use client";
import React, { useEffect } from 'react';

const Ads = () => {
    useEffect(() => {
        const loadScript = (src: string) => {
            return new Promise<void>((resolve, reject) => {
                const script = document.createElement('script');
                script.src = src;
                script.async = true;
                script.onload = () => resolve();
                script.onerror = () => reject();
                document.body.appendChild(script);
            });
        };

        const initializeAds = async () => {
            try {
                await loadScript('https://securepubads.g.doubleclick.net/tag/js/gpt.js');
                window.googletag = window.googletag || { cmd: [] };

                googletag.cmd.push(() => {
                    const REFRESH_KEY = 'refresh';
                    const REFRESH_VALUE = 'true';

                    googletag.defineSlot('/6355419/Travel', [728, 90], 'div-for-slot')!
                        .setTargeting(REFRESH_KEY, REFRESH_VALUE)
                        .setTargeting('test', 'event')
                        .addService(googletag.pubads());

                    const SECONDS_TO_WAIT_AFTER_VIEWABILITY = 60;

                    googletag.pubads().addEventListener('impressionViewable', (event: any) => {
                        const slot = event.slot;
                        if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
                            setTimeout(() => {
                                googletag.pubads().refresh([slot]);
                            }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
                        }
                    });

                    googletag.enableServices();
                    googletag.display("div-for-slot");
                });
            } catch (error) {
                console.error('Failed to load ad scripts:', error);
            }
        };

        initializeAds();

        const handleButtonClick = () => {
            if (window.googletag) {
                window.googletag.cmd.push(() => {
                    window.googletag.pubads().refresh();
                });
            }
        };

        document.getElementById("showAdButton")?.addEventListener("click", handleButtonClick);

        return () => {
            document.getElementById("showAdButton")?.removeEventListener("click", handleButtonClick);
        };
    }, []);

    return (
        <div>
            <div id="div-for-slot" style={{ width: '728px', height: '90px' }}></div>
            <button id="showAdButton">Show/Refresh Ad</button>
        </div>
    );
};

export default Ads;
