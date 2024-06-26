import React from 'react';
import './ProjectDesc.css';

const ProjectDesc = {
  project1: {
    title: 'Budget Tracking Application',
    date: 'Feb-2024',
    description: (
      <>
      <div className='Project-Description'>
        <div className="project-overview">
        <h3>Overview:</h3>
        <p>
          The Budget Tracking Application is a full-stack web application built using the MERN (MongoDB, Express, React, Node.js) stack. It provides users with a platform to manage their finances by tracking income, expenses, and transactions across multiple accounts.
        </p>
        </div>
        <div className="project-technologies">
        <h3>Technologies Used:</h3>
        <ul>
          <li><strong>Frontend:</strong> ReactJS</li>
          <li><strong>Backend:</strong> Node.js, Express</li>
          <li><strong>Database:</strong> MongoDB (with Mongoose ODM)</li>
          <li><strong>Deployment Platforms:</strong> Netlify (for frontend), Render (for backend)</li>
        </ul>
        </div>
        <div className="project-features">
        <h3>Features Implemented:</h3>
        <ol>
          <li><strong>User Authentication:</strong> Implemented user registration and login functionalities using JSON Web Tokens (JWT) for secure authentication and authorization.</li>
          <li><strong>Account Management:</strong> Users can create and manage multiple accounts to categorize their finances (e.g., savings, checking, credit cards). Each account maintains a balance and lists associated transactions.</li>
          <li><strong>Transaction Management:</strong> Users can add, edit, and delete transactions for each account. Transactions include details such as date, category (e.g., income, expense), amount, and optional notes.</li>
          <li><strong>Dashboard and Reporting:</strong> Provides a dashboard view summarizing the overall financial status. Includes visual representations (charts, graphs) to display spending patterns, income trends, and account balances over time.</li>
          <li><strong>Responsive Design:</strong> Ensured the application is responsive and accessible across different devices and screen sizes for seamless user experience.</li>
          <li><strong>Data Persistence and Security:</strong> Utilized MongoDB as the database to store user profiles, accounts, and transactions securely. Implemented encryption techniques and secure API endpoints to protect user data.</li>
          <li><strong>API Integration:</strong> Integrated with third-party APIs if needed for additional financial data retrieval or analysis (optional feature).</li>
          <li><strong>Deployment and Hosting:</strong> Frontend hosted on Netlify for static content delivery and fast load times. Backend hosted on Render for reliable server-side operations and scalability.</li>
        </ol>
        </div>
        <div className="project-contributions">
        <h3>Project Contributions:</h3>
        <ul>
          <li><strong>Frontend Development:</strong> Designed and developed the user interface (UI) using ReactJS, ensuring a user-friendly and intuitive experience.</li>
          <li><strong>Backend Development:</strong> Implemented RESTful APIs using Node.js and Express to handle user authentication, account management, and transaction operations.</li>
          <li><strong>Database Design:</strong> Designed MongoDB schemas using Mongoose, ensuring efficient data storage and retrieval for accounts and transactions.</li>
          <li><strong>Deployment and Testing:</strong> Deployed the application components on respective platforms (Netlify, Render) and conducted thorough testing to ensure functionality and performance.</li>
        </ul>
        </div>
        <div className="project-conclusion">
        <h3>Conclusion:</h3>
        <p>
          The Budget Tracking Application using the MERN stack provides a robust solution for individuals to manage their finances effectively. It leverages modern web technologies to offer a seamless user experience, secure data handling, and comprehensive financial management capabilities. This project demonstrates proficiency in full-stack development, API integration, and deployment strategies essential for real-world web applications.
        </p>
        <p>
          This application serves as a testament to the capability of MERN stack technologies in building scalable and feature-rich web applications tailored for financial management and personal budgeting needs.
        </p>
        </div>
        </div>
      </>
    ),
    githubLink: 'https://github.com/Pashu3/Budget_Tracking_Application.git',
    downloadLink: '#'
  },
  project2: {
    title: 'Ethereum Fraud Detection',
    date: 'Nov-2023',
    description: (
      <>
      <div className='Project-Description'>
        <div className="project-overview">
        <h2>Overview:</h2>
        <p>
          The Ethereum Fraud Detection project utilizes machine learning classifiers to predict fraudulent transactions on the Ethereum blockchain. The project is based on analyzing transaction data to identify patterns indicative of fraud, helping to mitigate the risks associated with cryptocurrency transactions.
        </p>
        </div>
        <div className="project-technologies">
        <h2>Technologies Used:</h2>
        <ul>
          <li><strong>Programming Language:</strong> Python</li>
          <li><strong>Libraries:</strong> pandas, numpy, sklearn, xgboost</li>
          <li><strong>Web Framework:</strong> Flask</li>
          <li><strong>Development Environment:</strong> PyCharm</li>
        </ul>
        </div>
        <div className="project-features">
        <h2>Features Implemented:</h2>
        <ol>
          <li><strong>Data Preparation:</strong> Handled missing values by filling them with median values. Dropped irrelevant columns to streamline the dataset. Performed data variance and correlation analysis. Visualized data distribution and relationships for better insights.</li>
          <li><strong>Model Training:</strong> Trained multiple machine learning models including Logistic Regression, Decision Tree, Random Forest, Gradient Boosting, XGBoost, AdaBoost, K-Nearest Neighbors, and Support Vector Machines. Evaluated models based on accuracy and AUC to select the best performer.</li>
          <li><strong>Model Selection:</strong> Chose XGBoost as the final model due to its superior performance with an accuracy of 99% and AUC of 0.979.</li>
          <li><strong>Web Application:</strong> Developed a Flask-based web application to allow users to input transaction data and receive predictions on their likelihood of being fraudulent. Integrated the trained XGBoost model into the web application for real-time fraud detection.</li>
          <li><strong>Deployment:</strong> Provided clear instructions for setting up and running the project locally, including dependencies installation and running the Flask server.</li>
        </ol>
        </div>
        <div className="project-contributions">
        <h2>Project Contributions:</h2>
        <ul>
          <li><strong>Data Preprocessing:</strong> Managed data cleaning, handling missing values, and feature selection.</li>
          <li><strong>Model Training and Evaluation:</strong> Implemented and evaluated multiple machine learning models to select the best one.</li>
          <li><strong>Web Development:</strong> Created a Flask-based web interface for user interaction with the model.</li>
          <li><strong>Documentation:</strong> Prepared detailed instructions for setting up and running the project, ensuring ease of use.</li>
        </ul>
        </div>
        <div className="project-conclusion">
        <h2>Conclusion:</h2>
        <p>
          The Ethereum Fraud Detection project showcases the application of machine learning to identify fraudulent transactions on the Ethereum blockchain. By leveraging the XGBoost model, the project achieves high accuracy and reliability in fraud detection. This work highlights the effectiveness of machine learning in enhancing security within the cryptocurrency domain, demonstrating proficiency in data analysis, model training, and web application development.
        </p>
         </div>
         </div>
      </>
    ),
    githubLink: 'https://github.com/Pashu3/Ethereum-Fraud-Detection',
    downloadLink: '#'
  },
  project3: {
    title: 'Stock Price Prediction Using LSTM and XGBoost',
    date: 'May-2023',
    description: (
      <>
      <div className='Project-Description'>
      <div className="project-overview">
        <h2>Overview:</h2>
        <p>
          The Stock Price Prediction project leverages machine learning algorithms to forecast the stock prices of Amazon and Tesla. By analyzing historical stock data, the project aims to provide accurate predictions using different models, helping investors make informed decisions.
        </p>
        </div>
        <div className="project-technologies">
        <h2>Technologies Used:</h2>
        <ul>
          <li><strong>Programming Language:</strong> Python</li>
          <li><strong>Libraries:</strong> pandas, numpy, sklearn, xgboost, tensorflow</li>
          <li><strong>Development Environment:</strong> Jupyter Notebook</li>
        </ul>
         </div>
         <div className="project-features">
        <h2>Features Implemented:</h2>
        <ul>
          <li><strong>Data Preparation:</strong>
            <ul>
              <li>Collected historical stock price data for Amazon and Tesla.</li>
              <li>Cleaned the data by handling missing values and normalizing features.</li>
              <li>Visualized stock price trends to understand patterns and correlations.</li>
            </ul>
          </li>
          <li><strong>Model Training:</strong>
            <ul>
              <li>Implemented Linear Regression and XGBoost for predicting Amazon stock prices.</li>
              <li>Utilized Long Short-Term Memory (LSTM) networks for predicting Tesla stock prices.</li>
              <li>Trained models using the respective datasets and tuned hyperparameters for optimal performance.</li>
            </ul>
          </li>
          <li><strong>Model Evaluation:</strong>
            <ul>
              <li>Evaluated models based on metrics such as Mean Absolute Error (MAE) and Root Mean Squared Error (RMSE).</li>
              <li>Compared the performance of different models to select the most accurate ones for each stock.</li>
            </ul>
          </li>
          <li><strong>Project Structure:</strong>
            <ul>
              <li><strong>Amazon_Datasets:</strong> Contains the dataset file for Amazon stock price prediction.</li>
              <li><strong>Tesla_Datasets:</strong> Contains the dataset file for Tesla stock price prediction.</li>
              <li><strong>Amazon_stock_Price_Prediction:</strong> Jupyter Notebook implementing Amazon stock price prediction using Linear Regression and XGBoost.</li>
              <li><strong>Tesla_stock_prediction:</strong> Jupyter Notebook implementing Tesla stock price prediction using LSTM.</li>
            </ul>
          </li>
          <li><strong>Instructions:</strong>
            <ul>
              <li>Provided step-by-step instructions for running the prediction models locally.</li>
              <li>Included guidance on downloading datasets, running Jupyter Notebooks, and observing prediction results.</li>
            </ul>
          </li>
        </ul>
         </div>
         <div className="project-contributions">
        <h2>Project Contributions:</h2>
        <ul>
          <li><strong>Data Collection and Preprocessing:</strong> Handled data gathering, cleaning, and preparation for model training.</li>
          <li><strong>Model Implementation:</strong> Developed and trained Linear Regression, XGBoost, and LSTM models for stock price prediction.</li>
          <li><strong>Model Evaluation:</strong> Assessed model performance and selected the best models for accurate predictions.</li>
          <li><strong>Documentation:</strong> Created comprehensive instructions for setting up and running the project, ensuring ease of use for users.</li>
        </ul>
        </div>
        <div className="project-conclusion">
        <h2>Conclusion:</h2>
        <p>
          The Stock Price Prediction project demonstrates the application of machine learning techniques to forecast stock prices. By utilizing Linear Regression, XGBoost, and LSTM models, the project achieves high accuracy in predicting stock prices for Amazon and Tesla. This work highlights the potential of machine learning in financial forecasting, showcasing skills in data preparation, model training, and evaluation.
        </p>
        </div>
        </div>
      </>
    ),
    githubLink: 'https://github.com/Pashu3/Stock-Price-Prediction',
    downloadLink: '#'
  },  
  project4: {
    title: 'Vehicle Detection, Classification, and Counting',
    date: 'April-2023',
    description: (
      <>
      <div className='Project-Description'>
      <div className="project-overview">
        <h2>Overview:</h2>
        <p>
          Vehicle tracking is the process of locating moving vehicles using cameras, significantly enhancing applications such as traffic control, monitoring, and security. This technology leverages video and image processing to improve tracking performance, aiding in traffic surveillance, analysis, and monitoring. Vehicle detection provides critical information for vehicle counting, speed measurement, accident identification, and traffic flow prediction.
        </p>
        </div>
        <div className="project-technologies">
        <h2>Technologies Used:</h2>
        <ul>
          <li><strong>Programming Language:</strong> Python</li>
          <li><strong>Libraries:</strong> OpenCV, numpy</li>
          <li><strong>Development Environment:</strong> Jupyter Notebook, PyCharm</li>
        </ul>
        </div>
        <div className="project-features">
        <h2>Features Implemented:</h2>
        <ul>
          <li><strong>Vehicle Detection:</strong>
            <ul>
              <li>Utilized video sequences from surveillance cameras for tracking vehicles.</li>
              <li>Implemented background subtraction and binarization for clear vehicle outlines.</li>
              <li>Applied morphological operations to refine vehicle detection.</li>
            </ul>
          </li>
          <li><strong>Vehicle Classification:</strong>
            <ul>
              <li>Classified detected vehicles into categories based on predefined criteria.</li>
              <li>Used image processing techniques to distinguish between different types of vehicles.</li>
            </ul>
          </li>
          <li><strong>Vehicle Counting:</strong>
            <ul>
              <li>Counted the number of vehicles passing through a designated area in the video.</li>
              <li>Provided accurate vehicle counts to aid in traffic flow analysis.</li>
            </ul>
          </li>
          <li><strong>Data Processing Techniques:</strong>
            <ul>
              <li><strong>Background Subtraction:</strong> Used to isolate moving vehicles from the background.</li>
              <li><strong>Thresholding:</strong> Applied to convert grayscale images into binary images for better detection.</li>
              <li><strong>Morphological Operations:</strong> Included opening and closing operations to eliminate noise and enhance vehicle shapes.</li>
            </ul>
          </li>
          <li><strong>Deployment and Usability:</strong>
            <ul>
              <li>Developed a user-friendly interface for running the vehicle detection system.</li>
              <li>Ensured the system can handle various video inputs and provide real-time results.</li>
            </ul>
          </li>
        </ul>
        </div>
        <div className="project-contributions">
        <h2>Project Contributions:</h2>
        <ul>
          <li><strong>Data Processing:</strong> Managed video input, background subtraction, and binarization to enhance vehicle visibility.</li>
          <li><strong>Algorithm Implementation:</strong> Developed and implemented algorithms for vehicle detection, classification, and counting.</li>
          <li><strong>Morphological Operations:</strong> Applied opening and closing operations to refine detection results.</li>
          <li><strong>Documentation:</strong> Created detailed instructions for running the vehicle detection and counting system, ensuring usability.</li>
        </ul>
        </div>
        <div className="project-conclusion">
        <h2>Conclusion:</h2>
        <p>
          The Vehicle Detection, Classification, and Counting project showcases the application of video and image processing to enhance traffic surveillance and monitoring. By accurately detecting, classifying, and counting vehicles, the project contributes to improving traffic management and safety. This work demonstrates proficiency in computer vision techniques, algorithm development, and practical implementation for real-world traffic analysis.
        </p>
        </div>
        </div>
      </>
    ),
    githubLink: 'https://github.com/YourUsername/Vehicle-Detection-Classification-Counting',
    downloadLink: '#'
  },  
  project5: {
    title: 'Lane Line Detection using OpenCV',
    date: 'Oct-2022',
    description: (
      <>
      <div className='Project-Description'>
      <div className="project-overview">
        <h2>Overview:</h2>
        <p>
          Lane line detection is a critical component for self-driving cars, aiding in path guidance and lane departure warnings to ensure vehicle safety. This project focuses on building a machine learning system to detect lane lines in real-time using OpenCV, enhancing the reliability and performance of autonomous driving systems.
        </p>
        </div>
        <div className="project-technologies">
        <h2>Technologies Used:</h2>
        <ul>
          <li><strong>Programming Language:</strong> Python</li>
          <li><strong>Libraries:</strong> OpenCV, numpy, matplotlib</li>
          <li><strong>Development Environment:</strong> Jupyter Notebook, PyCharm</li>
        </ul>
        </div>
        <div className="project-features">
        <h2>Features Implemented:</h2>
        <ul>
          <li>Utilized video frames to detect lane lines in real-time.</li>
          <li>Converted frames to grayscale and applied Gaussian blur to reduce noise.</li>
          <li>Employed Canny edge detection to identify edges within the frame.</li>
          <li>Calculated the slope and intercept of lane lines using polynomial fitting, differentiating between left and right lane lines based on slope sign.</li>
          <li>Defined a polygonal region of interest to focus the lane detection process, improving detection accuracy.</li>
          <li>Used the Hough Line Transform to detect lines within the region of interest, extracting line segments that represent potential lane lines from the detected edges.</li>
          <li>Drew the detected lane lines on a blank image and combined the lane line image with the original frame for visual representation.</li>
          <li>Displayed the resulting image with lane lines overlaid on the original road view.</li>
        </ul>
         </div>
         <div className="project-contributions">
        <h2>Project Contributions:</h2>
        <ul>
          <li>Implemented preprocessing steps including grayscale conversion, Gaussian blur, and edge detection.</li>
          <li>Developed functions to calculate and average the slopes and intercepts of detected lines.</li>
          <li>Defined and applied a mask to focus on the relevant part of the frame for lane detection.</li>
          <li>Created a video processing loop to handle real-time lane line detection from video input.</li>
          <li>Provided detailed explanations and instructions for running the lane line detection system.</li>
        </ul>
        </div>
        <div className="project-conclusion">
        <h2>Conclusion:</h2>
        <p>
          The Lane Line Detection project demonstrates the application of computer vision techniques to enhance autonomous vehicle navigation. By accurately detecting lane lines in real-time, this project contributes to the safety and reliability of self-driving cars. The use of OpenCV and Python showcases proficiency in image processing, algorithm development, and real-time video analysis, highlighting the potential of computer vision in modern automotive technology.
        </p>
        </div>
        </div>
      </>
    ),
    githubLink: 'https://github.com/Pashu3/Lane-Line-Detection',
    downloadLink: '#'
  }
};

export default ProjectDesc;
