// lib/updateCronJob.ts

const ENDPOINT = 'https://api.cron-job.org';

const headers = {
    'Authorization': 'Bearer hHejpin2IZRepvwV3MAH5JpI9TaSfe6OuYU/ezNnwmM=',
    'Content-Type': 'application/json',
};

const updateCronJob = async (jobId: string) => {
    const payload = {
        job: {
            enabled: true,
        },
    };

    try {
        const response = await fetch(`${ENDPOINT}/jobs/${jobId}`, {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error updating cron job:', error);
        throw error;
    }
};

export default updateCronJob;
