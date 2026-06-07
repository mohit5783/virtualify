# Tassenger Privacy Policy

Last updated: May 28, 2026

This Privacy Policy explains how **VIRTUALIFY SOFTWARE CONSULTANCY PRIVATE LIMITED** ("Virtualify", "we", "us", or "our") collects, uses, stores, shares, and protects information when you use **Tassenger**.

Tassenger is a taskable messenger for personal chats, groups, official workspaces, tasks, reminders, media, and support. If anything in this policy is unclear, contact us at [vscsocialhandle@gmail.com](mailto:vscsocialhandle@gmail.com).

Related pages:

- Privacy Policy: [https://www.virtualifyme.com/tassenger/privacy](https://www.virtualifyme.com/tassenger/privacy)
- Terms of Service: [https://www.virtualifyme.com/tassenger/terms](https://www.virtualifyme.com/tassenger/terms)
- Support: [https://www.virtualifyme.com/tassenger/support](https://www.virtualifyme.com/tassenger/support)
- Delete your account: [https://www.virtualifyme.com/tassenger/delete-account](https://www.virtualifyme.com/tassenger/delete-account)

## 1. Who we are

Tassenger is operated by **VIRTUALIFY SOFTWARE CONSULTANCY PRIVATE LIMITED**, a company incorporated in India.

Contact and grievance email: [vscsocialhandle@gmail.com](mailto:vscsocialhandle@gmail.com)

For personal Tassenger use, Virtualify decides how the app data is processed. For Official Workspaces, the organization that controls the workspace may decide how workspace content, task records, member roles, reports, and audit data are used. In those cases, Virtualify provides the app and infrastructure for the organization.

## 2. Information we collect

### Account and sign-in data

We collect and process:

- Apple or Google sign-in identifiers and sign-in result;
- provider email, display name, and profile image where the provider supplies them;
- phone number;
- email address;
- phone verification result if a fallback or future phone-verification flow is used;
- account ID;
- active sessions and refresh tokens;
- device push tokens for notifications;
- app version and platform information needed to operate the service.

We use this to create and secure your account, sign you in, keep your session active, support contact discovery, and send notifications that you have enabled. Google or Apple sign-in is the normal account login path. Phone number is required profile/contact metadata unless a separate verification flow marks it as verified.

### Profile data

You may provide:

- name;
- phone number;
- email address;
- optional About/status line;
- optional profile photo.

Your name, About line, and profile photo may be visible to people who can see your profile, such as people in your chats, groups, or workspaces. Your phone number and email address are used for profile completeness, contact discovery, support, and account management. Phone number is not the normal sign-in identity.

### Contacts and discovery

Contacts are optional, but they help Tassenger show people you already know who are on Tassenger.

If you allow Contacts access:

- the app reads phone numbers from your device contacts;
- the app may read email addresses from your device contacts;
- phone numbers and email addresses are normalized where possible and sent for backend matching in a privacy-conscious form;
- the matching flow is used to find active Tassenger users and direct-chat status;
- we do not upload contact names, notes, or full address-book records for browsing;
- we do not create chats automatically from your contacts;
- the current matching flow does not store your uploaded phonebook as a browsable server-side address book.

You can deny Contacts access and still use Tassenger. You can also revoke Contacts access later from your device settings.

### Messages, tasks, and task history

We store the content and metadata needed to provide chat and task features, including:

- messages and timestamps;
- conversation membership and delivery/read state where available;
- task title, description, assignee, due date, repeat setting, status, proof, review, blocker, and history;
- reminders and task activity events;
- message edit/delete tombstones and task-created/member-added timeline events.

Tasks are designed to stay visible above chat messages. Task history exists so participants and, where applicable, official workspace admins can understand what happened and when.

### Media

When you choose to upload media, we store the file and related metadata. This may include:

- profile photos;
- group photos;
- chat images;
- task proof images;
- voice notes.

Media is stored using Cloudflare R2 and related application metadata is stored through our backend. The current mobile app uses platform photo pickers for image selection and microphone access for voice notes. Camera capture is requested only if a future camera capture feature is added or if a platform flow requires it.

### Notifications

If you allow notifications, we use device push tokens and notification payloads to send alerts for messages, tasks, reminders, mentions, and important app events.

Push delivery uses:

- Apple Push Notification service (APNs) on iOS and iPadOS;
- Firebase Cloud Messaging (FCM) on Android.

You can deny notifications and still use Tassenger, but you may miss reminders or message/task alerts.

### Official Workspace data

If you use an Official Workspace, we process workspace data such as:

- organization and workspace membership;
- roles and permissions;
- official groups;
- official tasks, reports, scores, and accountability records;
- admin and support access audit logs.

Workspace owners and authorized admins may be able to view, manage, export, or retain workspace data according to their role, organizational policy, and applicable law.

### Support and operational data

When you contact support, we may process:

- your support message;
- account identifiers needed to find the issue;
- screenshots or details you voluntarily provide;
- support access grants and audit logs;
- technical logs needed to diagnose delivery, sync, or account issues.

Support access to workspace or account data is intended to be scoped, temporary, and auditable.

### Technical and diagnostic data

We process technical information needed to operate, secure, and improve Tassenger, such as app version, device platform, server request metadata, auth/session state, and operational logs.

Tassenger does not currently include a separate app-side analytics or crash-reporting SDK. Infrastructure providers may still process operational logs required to deliver, secure, and maintain the service.

### Payments

Tassenger currently does not process payments. If paid features are added later, this policy and store disclosures will be updated before payment data is collected.

## 3. How we use information

We use information to:

- create, verify, and secure accounts through Apple/Google sign-in and backend sessions;
- deliver messages, tasks, reminders, media, and notifications;
- sync data across your devices;
- show contacts who are on Tassenger when you allow contact matching;
- operate personal groups and Official Workspaces;
- support task accountability, reports, reviews, and audit trails;
- provide customer support and investigate bugs;
- prevent spam, abuse, fraud, and security incidents;
- comply with legal obligations and lawful requests.

We do not sell your personal data. We do not use your messages, tasks, media, or contact graph to build advertising profiles.

## 4. Device permissions

Tassenger asks for permissions only when they support a feature.

- **Contacts:** used for contact discovery and invite flows. Optional.
- **Notifications:** used for message, task, and reminder alerts. Optional.
- **Microphone:** used for voice notes or voice features. Requested when needed.
- **Photos/media picker:** used when you choose a profile photo, group photo, chat image, or proof image.
- **Camera:** not required for the current core flow; requested only if a camera capture feature is added.

You can change permissions in your device settings. Denying a permission limits that feature but does not automatically close your account.

## 5. How we share information

### With other users

People you chat with can see messages, media, tasks, and task history you share with them. Group members can see group content. In Official Workspaces, members and admins can see workspace content according to their permissions.

### With organizations that run Official Workspaces

If you are part of an Official Workspace, the organization may access workspace messages, tasks, reports, member roles, and audit records according to its role and policy.

### With service providers

We use service providers to operate Tassenger. They process data for us and for app functionality:

- Supabase for authentication, database, storage metadata, and backend services;
- Cloudflare R2 for media object storage;
- Apple Push Notification service for iOS/iPadOS notifications;
- Firebase Cloud Messaging for Android notifications;
- Apple and Google platform services for app distribution, permissions, push delivery, and device operation.

These providers may process data in regions outside India. We use them to provide the service; we do not authorize them to sell Tassenger user data.

### Legal, safety, and business reasons

We may disclose information if required by law, legal process, or a valid government request, or if reasonably necessary to protect users, Virtualify, the service, or the public. If Virtualify is involved in a merger, acquisition, restructuring, or asset sale, user information may be transferred as part of that transaction subject to this policy or an updated policy.

## 6. Retention

We keep data only as long as needed for the service, safety, legal compliance, workspace accountability, and deletion/anonymization workflows.

- Account and profile data is retained while your account exists.
- Messages, tasks, task history, and media are retained while the conversation, group, workspace, or account context requires them.
- Official Workspace records may be retained by the workspace owner for accountability, compliance, or operational reasons.
- Support and audit logs are retained for security, abuse prevention, and accountability.
- Push tokens are removed when no longer tied to an active device/session or as part of deletion.
- Contact matching data is used for discovery and is not used as a browsable address book.

When you request account deletion, verified requests are processed through deletion and anonymization. Active-system deletion/anonymization usually completes within 30 days after verification, unless more time is required for legal, security, abuse-prevention, workspace-integrity, or verification reasons. Backup copies may take up to 90 days to age out.

## 7. Account deletion

You can request deletion from inside the app or from:

[https://www.virtualifyme.com/tassenger/delete-account](https://www.virtualifyme.com/tassenger/delete-account)

Deletion removes or anonymizes account identity, profile data, sessions, push tokens, and related personal data where possible. Some shared or official workspace records may remain with your identity anonymized so that other participants or organizations retain a coherent record. We may retain limited information where required by law or necessary for security, abuse prevention, dispute handling, or official workspace accountability.

Uninstalling the app does not delete your account. You must submit a deletion request.

## 8. Your choices and rights

Depending on the law that applies to you, you may have rights to:

- access data we hold about you;
- correct inaccurate data;
- request deletion;
- withdraw permission for Contacts, Notifications, Microphone, or Photos access;
- object to certain processing;
- contact us or a relevant authority about privacy concerns.

To exercise these rights, email [vscsocialhandle@gmail.com](mailto:vscsocialhandle@gmail.com).

## 9. Children and minors

Tassenger is not directed to children. You must be old enough to use Tassenger under laws that apply to you and to consent to the processing described in this policy. If local law requires parent, guardian, school, employer, or organization consent for your use, you must have that consent.

If you believe a child is using Tassenger without proper consent, contact us at [vscsocialhandle@gmail.com](mailto:vscsocialhandle@gmail.com).

## 10. Security

We use administrative, technical, and organizational safeguards to protect Tassenger data. No internet service is perfectly secure, so you should protect your phone, SIM, OTP, device lock, and active sessions. Tassenger support will never ask for your OTP or verification code.

## 11. Changes to this policy

We may update this policy as Tassenger changes or as legal requirements evolve. If changes are material, we will take reasonable steps to notify users through the app, website, or other appropriate channels.

## 12. Contact

For privacy questions, support, deletion requests, or complaints:

**VIRTUALIFY SOFTWARE CONSULTANCY PRIVATE LIMITED**
India
Email: [vscsocialhandle@gmail.com](mailto:vscsocialhandle@gmail.com)
