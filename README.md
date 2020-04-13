# Final_Project

## Segment 1: <br>
This week's overall goal for the project was to select a topic and data source. To create a solid foundation for the final project we assigned roles to team members and decided what questions we hope to answer by the end of the project.

### Team

<strong>Square: </strong> Responsible for setting up the repository, updating the README, and other documentation. Primary: Hillary<br>
<strong>Circle: </strong> Responsible for creating the database. Primary: Rudy<br>
<strong>Triangle: </strong> Responsible for creating a simple machine learning model. Primary: Jason<br>

### Communication Protocols
- Message communication via Slack
- Virtual meetings via Zoom Tuesday, Thursday, and Sunday. Additional meeting to be scheduled as needed. 

### Project Overview

<strong> Slected Topic: </strong> Presence of Mental Health Disorders in the Tech Workforce <br>

<strong> Reason for Choosing this Topic: </strong> Initially wanted to see if there was a correlation between TBI's and mental health later in life, but had trouble finding a dataset. Also, with many more people working from home and the steady increase of jobs in tech, this general topic seems timely.<br>

<strong> Questions we Hope to Answer: </strong> 
1. Based off how idividuals answer the survey, are you able to predict whether or not they have a diagnosed mental health disorder?
2. Are there specific aspects of a tech company that correlate to the presence of mental health disorders?
3. <br><br>

### Data

<strong> Data Source: </strong>OSMI Mental Health in Tech Survey 2016 <br> 
CSV and JSON file from kaggle. It is a survey dataset from 2016 that has 1433 observations (individuals that participated in the survey) with 63 features (questions that were asked).<br> 
<strong> Null Hypothesis: </strong> There is no correlation between a mental health disorder diagnosis and working in tech <br>
<strong> Alternative Hypothesis: </strong> Based off how one responds to questions on a survey, you are able to predict if one has a diagnosed mental health disorder. <br> 
<strong> Label: </strong>Have you been diagnosed with a mental health condition by a medical professional? <br>

### Technology
<strong>Software:</strong> Jupyter Notebook, Python 3.7.6<br>
<strong>Python libraries:</strong> Pandas, Numpy, Scipy, Scikit-learn

### Machine Learning Model

The project team is planning on using a Random Forest model as they can be run efficiently on large datasets and can handle a large number of input vaiables in a natural way, which is important seeing that our original dataset is a survey that consisted of 63 questions. Random forest algorithms are created by randomly sampling a small portion of data and then creating a decision tree for that portion. This is done many times, creating a "forest" of simple trees that are weak learners, but when combined create a strong learner that is robust against overfitting and outliers, they can also be used to rank the importnace of input variables.<br>

### Data

#### Data Cleaning
The initial step is to clean the data, and to transform the categorical data to numerical so that it can be used in a random forest model. 
- Pandas was used to loop through the data set and functions were printed to look at each column and its response percentage. Any columns with less than a 70% response were dropped from the data set, leaving us with 48 features. 
- Columns with more than 10 unique responses were added to a list. From that list we dropped any columns with a long response, and kept columns that could be binned, for example the Country where people work, leaving us with 45 columns. 
- Chi-square tests were ran on each column to determine which columns were significant and should be kept. A p-value of 0.05 was used to determine significance, leaving us with 32 columns. 
- Since the data set is categorical, we will be using "OneHotEncoder" from the Sklearn library. This will allow us to take the categorical data from each column and subsequently split it into multiple response columns for each response. The categorical data is replaced by 1s and 0s, depending on which column has what value. For example, most of the questions in the survey have either a "yes", "no" or "I don't know" response", meaning that we will get three new columns for each question asked. 

#### Preprocessing
The next step is to preprocess the encoded data so that we can fit our training and testing sets. 
- Define the features and target. 

### Database Storage
Postgres will be used in conjunction with AWS for database storage. 