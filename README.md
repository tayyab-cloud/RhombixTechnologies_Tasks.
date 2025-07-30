# Rhombix Technologies Internship Tasks

This repository contains the source code for the projects assigned during my internship at Rhombix Technologies.

---

## Task 1: Serverless Live Visitor Counter

This project is a fully serverless, dynamic web application built on AWS that displays a live visitor counter.

### Architecture & AWS Services Used

The application uses a modern, event-driven architecture with the following AWS services:

*   **Amazon S3:** To host the static frontend (HTML, CSS, JavaScript).
*   **Amazon API Gateway:** To create a RESTful API endpoint that triggers the backend logic.
*   **AWS Lambda:** For the serverless backend compute logic, written in Python, which updates the counter.
*   **Amazon DynamoDB:** A NoSQL database used to store and persist the visitor count.

### How it Works

1.  A user visits the website hosted on S3.
2.  The JavaScript on the frontend sends a `GET` request to the API Gateway endpoint.
3.  API Gateway triggers the Lambda function.
4.  The Lambda function updates the visitor count in the DynamoDB table and returns the new count.
5.  The frontend JavaScript receives the new count and displays it on the webpage.
