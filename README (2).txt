PhilanthroLink - Pre-Alpha Prototype Detailed Documentation

Course: Android App Development (Summer 2026)
Team Member: Prudhvi Prasad Sikharam
Project Name: PhilanthroLink

1. Project Overview

PhilanthroLink is a dual-module Android application designed to facilitate seamless interaction between Non-Governmental Organizations (NGOs) and Volunteers. This submission represents the Pre-Alpha Prototype of the application.

Unlike the Vertical Prototype, which focused on implementing one complete donation workflow using Firebase Authentication and Firebase Realtime Database, the Pre-Alpha Prototype significantly expands the application's functionality by implementing additional real-world use cases and improving the overall user experience.

The Pre-Alpha Prototype extends the Vertical Prototype by implementing multiple additional use cases, including secure authentication, live donation request management, interactive statistics, review and feedback modules, and significant Material Design improvements. The foundation for Donation History and QR-based workflows has been established, with full integration planned for the Alpha Prototype.

2. Comprehensive Screen & Button Documentation
2.1 Foundation & Entry

Splash Screen (SplashActivity)

• Purpose: Displays the application logo and branding before launching the application.

• Visuals:

PhilanthroLink Logo
Loading Indicator

• Interaction:

Automatically redirects to WelcomeActivity after three seconds.

Welcome Screen (WelcomeActivity)

• Purpose:

Allows users to choose between the NGO module and Volunteer module.

• Buttons & Actions

NGO → Opens NGO Signup.
Volunteer → Opens Volunteer Signup.
2.2 • NGO Module

NGO Signup

• Purpose:

Registers NGOs using Firebase Authentication and stores organization information inside Firebase Realtime Database.

• Buttons & Actions

Signup → Creates Firebase account and stores NGO profile.
Login → Opens NGO Login.
Back → Returns to Welcome Screen.
NGO Login

• Purpose:

Authenticates NGOs using Firebase Authentication.

Supports login using either Email Address or Organization ID through Firebase lookup.

• Buttons & Actions

Login → Opens NGO Dashboard.
Forgot Password → Sends password reset email using Firebase Authentication.
Signup → Opens NGO Signup.
NGO Profile Dashboard

• Purpose:

Acts as the main control center for NGOs.

Displays:

NGO Profile
QR Code
Donation Request Form
Statistics
Feedback
Logout

• Buttons & Actions

Save Details → Creates a Donation Request and stores it in Firebase.
Statistics → Opens interactive statistics dashboard.
Feedback → Opens review management.
Logout → Returns to Login Screen.
Home → Returns to Welcome Screen.
NGO Statistics

• Purpose:

Displays real-time statistics related to NGO donation activities.

Shows:

Total Requests
Pending Requests
Completed Requests
Donations Received
Total Items Donated

Each statistics card is interactive.

Selecting a statistics card displays the corresponding Firebase records.

NGO Feedback

• Purpose:

Allows NGOs to submit feedback for Volunteers and view reviews received from Volunteers.

• Buttons & Actions

Give Feedback
View Reviews

Reviews are stored and retrieved directly from Firebase.

View NGO Reviews

• Purpose:

Displays reviews submitted by Volunteers.

Each review displays:

Volunteer Name
Review
Timestamp
2.3 • Volunteer Module

Volunteer Signup

• Purpose:

Registers Volunteers using Firebase Authentication and stores their profile inside Firebase Realtime Database.

• Buttons & Actions

Signup → Creates Firebase account.
Back → Returns to Welcome Screen.
Volunteer Login

• Purpose:

Authenticates Volunteers using Firebase Authentication.

Supports Email Address and Volunteer ID lookup.

• Buttons & Actions

Login
Forgot Password
Signup
Volunteer Dashboard

• Purpose:

Acts as the main navigation hub for Volunteers.

Provides access to:

Available NGOs
QR Scanner
Donation History
Reviews
Logout
Available NGOs

• Purpose:

Retrieves all registered NGOs from Firebase.

Displays each NGO using Material Design cards.

• Buttons & Actions

View Details
View Requests
View NGO Requests

• Purpose:

Displays all active donation requests created by the selected NGO.

• Buttons & Actions

Donate

Allows Volunteers to enter:

Quantity
Remarks

The donation is stored in Firebase and processed using Firebase Transactions.

QR Scanner

• Purpose:

Allows Volunteers to scan NGO QR Codes.

The QR Code identifies the NGO and immediately opens the organization's active donation requests.

Donation History

• Purpose:

Displays every donation made by the currently logged-in Volunteer.

Shows:

NGO Name
Donation Type
Quantity
Remarks
Date

Information is retrieved directly from Firebase.

Volunteer Reviews

• Purpose:

Allows Volunteers to:

Submit reviews for NGOs.
View reviews received from NGOs.

All review information is stored inside Firebase Realtime Database.

3. Technical Implementation Highlights

Firebase Authentication

Firebase Authentication provides secure registration, login, and password recovery for both NGOs and Volunteers. Each authenticated user receives a unique Firebase UID which is used throughout the application for secure identification and database operations.

Firebase Realtime Database

Firebase Realtime Database acts as the primary backend for the application. It stores user profiles, donation requests, donations, reviews, and statistics while synchronizing changes in real time across all connected users.

Complete • Donation Workflow

A complete end-to-end donation workflow has been implemented.

NGOs can create donation requests, Volunteers can browse available NGOs, view requests, submit donations, and immediately view their contribution history.

Firebase Transactions

Donation quantities are updated using Firebase Transactions to ensure data consistency.

When the requested quantity reaches zero, the request status is automatically changed from PENDING to COMPLETED.

Dynamic Data Retrieval

All major modules now retrieve information directly from Firebase instead of displaying placeholder data.

Implemented modules include:

NGO Profiles
Volunteer Profiles
Donation Requests
Donation History
Reviews
Statistics
Interactive Statistics Dashboard

The NGO Statistics module dynamically calculates values from Firebase.

Each statistics card displays detailed information when selected, allowing NGOs to inspect requests and donations.

QR Code Integration

Each NGO profile automatically generates a unique QR Code.

Volunteers can scan the QR Code to quickly access NGO information and donation requests.

Material Design Improvements

The user interface has been redesigned using Material Design components.

Improvements include:

Material Cards
Material Dialogs
Interactive Statistics Cards
Professional Donation Cards
Review Cards
Loading Indicators
Improved Navigation
Home Button
Removal of Duplicate Back Buttons
Modern Layout Design
Application Architecture

The application follows an Activity-based architecture developed in Kotlin.

Each Activity manages its own interface, communicates with Firebase services, and controls navigation while maintaining modularity for future enhancements.

4. Firebase Workflow


NGO Signup
↓
Firebase Authentication
↓
Store NGO Profile
↓
NGO Login
↓
Create Donation Request
↓
Firebase Realtime Database
↓
Volunteer Signup/Login
↓
Browse Available NGOs
↓
View NGO Request
↓
Donate
↓
Donation Stored
↓
Donation History Updated
↓
Statistics Updated
↓
Review & Feedback System

5. Evaluation Guide


• Install PhilanthroLink.apk

• Register an NGO account.

• Login as NGO.

• Create donation requests.

• View Statistics.

• Register a Volunteer.

• Browse NGOs.

• Donate.

• Verify Donation History.

• Submit Reviews.

• View Received Reviews.

• Scan NGO QR Code.

• Test Password Reset.


6. Tasks Completed for Pre-Alpha Prototype


The following tasks have been successfully completed in the Pre-Alpha Prototype:

• Authentication Module
NGO Registration using Firebase Authentication.
NGO Login using Firebase Authentication.
Volunteer Registration using Firebase Authentication.
Volunteer Login using Firebase Authentication.
Password Reset functionality using Firebase Authentication.
• NGO Module
NGO Profile Dashboard.
Donation Request Creation.
Donation Requests stored in Firebase Realtime Database.
Live NGO Statistics Dashboard.
NGO Feedback Module.
View Reviews received from Volunteers.
QR Code generation for NGO identification.
Improved Material Design user interface.
Home Navigation.
• Volunteer Module
Volunteer Profile Dashboard.
Browse Available NGOs.
View NGO Details.
View NGO Donation Requests.
Submit Donations.
Submit Reviews for NGOs.
View Reviews received from NGOs.
Improved Material Design interface.
Home Navigation.
• Donation Workflow
Complete NGO-to-Volunteer donation workflow.
Firebase Transactions for updating request quantities.
Automatic request completion when requested quantity becomes zero.
Real-time synchronization using Firebase Realtime Database.
• Firebase Integration
Firebase Authentication.
Firebase Realtime Database.
Real-time data retrieval.
Real-time data updates.
Review storage.
Statistics calculation.
• UI / UX Improvements
Material Cards.
Material Dialogs.
Interactive Statistics Dashboard.
Loading Indicators.
Modern Profile Layouts.
Review Cards.
Donation Cards.
Removal of duplicate back buttons.
Toolbar Home Navigation.
Improved typography and spacing.

7. Future Work (Alpha Prototype)


The following enhancements are planned for the Alpha Prototype:

• Donation Module
Complete the Volunteer Donation History module with a fully connected Firebase implementation.
Display all volunteer donations using dynamic Material Design cards.
Add donation filtering and sorting options.
Provide detailed donation information, including timestamps and organization details.
• QR Code Module
Complete the end-to-end QR Code workflow.
Allow volunteers to scan an NGO QR Code and directly navigate to the NGO's active donation requests.
Improve QR verification and validation.
Enhance QR navigation and user experience.
• Media Support
Integrate Firebase Storage.
Upload NGO certificates.
Upload NGO logos.
Upload Volunteer profile pictures.
• Search & Filtering
Advanced NGO search.
Category-based filtering.
Donation-type filtering.
• Volunteer Recognition
Implement Volunteer Impact Points.
Add achievement badges.
Introduce volunteer contribution tracking.
• Notifications
Push notifications for new donation requests.
Donation confirmation notifications.
Review notifications.
• Security & Performance
Improve Firebase Security Rules.
Optimize database queries.
Improve application performance.
Refactor repetitive code into reusable utility classes.
• UI Improvements
Additional Material Design animations.
Improved transitions.
Better responsiveness across different screen sizes.
Final application icon and branding improvements.


8. Important Information

Internet connection is required.
Firebase Authentication is used for secure login and registration.
Firebase Realtime Database stores user profiles, donation requests, reviews, and statistics.
The complete donation request workflow between NGOs and Volunteers is operational.
Reviews and feedback are integrated with Firebase.
NGO Statistics are generated dynamically using live Firebase data.
Material Design has been implemented throughout the application.
The Volunteer Donation History module and the complete QR workflow are planned for completion during the Alpha Prototype.