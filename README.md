# Final Project - Mental Health in  Tech Workplace


![Mental Health in Tech](https://github.com/hillarykrumbholz/Final_Project/blob/master/Presentation_GIFs/GIFMaker.org_duFod4.gif)

Link to presentation can be found [Here](https://docs.google.com/presentation/d/e/2PACX-1vQ9e59BSZeiK2LWKrIjWPhR_mGaKAb4BfJNviVGeLLih-dGfGRYO86zevzhnSuK90FRGu8NI8DQ-XHF/pub?start=false&loop=false&delayms=3000)

## Segment 2: <br>
By  end of this segment, many different pieces of  project will be underway -  analysis, work on  machine learning model, and  database will be transitioned into an operational, data-holding tool.

### Team

<strong>Square: </strong> To focus on  machine learning model. Primary: Hillary<br>
<strong>Circle: </strong> Responsible for creating  database. Primary: Rudy<br>
<strong>Triangle: </strong> Responsible for creating a simple machine learning model. Primary: Jason<br>

### Communication Protocols
- Message communication via Slack
- Virtual meetings via Zoom Tuesday, Thursday, and Sunday. Additional meeting to be scheduled as needed. 

### Project Overview

<strong> Slected Topic: </strong> Presence of Mental Health Disorders in  Tech Workforce <br>

<strong> Reason for Choosing this Topic: </strong>Careers in tech/IT are becoming more prominent.  
With many of us moving towards a career in tech or changing jobs, it’s of interest to look at  presence of mental health disorders in tech/IT, and possible mental health services provided by employers. 
<br>

<strong> Questions we Hope to Answer: </strong> 
1. Based on how participants answered survey questions, are we able to predict whether or not an individual has a diagnosed mental health disorder?
2. Does  presence of mental health services offered by a company have an effect on an individual’s mental health?
3. Do mental health disorders in  tech workplace vary by age, gender, or country they live and work in? <br><br>

### Data

<strong> Data Source: </strong>OSMI Mental Health in Tech Survey 2016 <br> 
CSV and JSON file from kaggle. It is a survey dataset from 2016 that has 1433 observations (individuals that participated in  survey) with 63 features (questions that were asked).<br> 
<strong> Null Hypothesis: </strong> There is no correlation between how participants answer questions to a mental health in tech survey, and their diagnosis of a mental health disorder. <br>
<strong> Alternative Hypothesis: </strong> Based off how one responds to questions on a survey, you are able to predict if one has a diagnosed mental health disorder. <br> 
<strong> Label: </strong>Have you been diagnosed with a mental health condition by a medical professional? <br>

### Technology
<strong>Software:</strong> Jupyter Notebook, Python 3.7.6<br>
<strong>Python libraries:</strong> Pandas, Numpy, Scipy, Scikit-learn, SQLAlchemy, Pickle

### Data

#### Data Cleaning
The initial step is to clean  data, and to transform  categorical data to numerical so that it can be used in a random forest model. 
- Pandas was used to loop through  data set and functions were printed to look at each column and its response percentage. Any columns with less than a 70% response were dropped from  data set, leaving us with 48 features. 
- Columns with more than 10 unique responses were added to a list. From that list we dropped any columns with a long response, and kept columns that could be binned, for example  Country where people work, leaving us with 45 columns. 
- Chi-square tests were ran on each column to determine which columns were significant and should be kept. A p-value of 0.05 was used to determine significance, leaving us with 32 columns. 
- Since  data set is categorical, we will be using "OneHotEncoder" from  Sklearn library. This will allow us to take  categorical data from each column and subsequently split it into multiple response columns for each response. The categorical data is replaced by 1s and 0s, depending on which column has what value. For example, most of  questions in  survey have either a "yes", "no" or "I don't know" response", meaning that we will get three new columns for each question asked. 

### Database Storage
 

### Machine Learning Model - Random Forest

#### How does a random forest model work?
Random forest models are classifier algorithms that evolve from many decision trees. Each individual decision tree provides a classification for input data, which is a sample taken from the original dataset. This is done many times, creating a "forest" of simple tree classifiers. Each of these trees, when on their own are "weak" learners, but when combined create a "strong" learner that is capable of making an accurate prediction by choosing the most voted prediction as the result. <br>

#### Why this model?
robust against overfitting and outliers, they can also be used to rank importnace of input variables.
Random forest models can be run efficiently on large datasets and can handle a large number of input vaiables in a natural way. Seeing that our original dataset is a survey that consisted of 63 questions from 1433 participants, it was important to choose a model that could make an accuarte prediction when there are so many variables at play. <br>

#### What is the model's accuracy?
![Confusion Matrix](https://github.com/hillarykrumbholz/Final_Project/blob/master/Segment_Two/Images/Confusion_matrix.png) <br>

#### What statistics are involved and why?


#### Preprocessing
 
 OneHotEncoder
- Encode categorical features to numerical values using OneHotEncoder. This creates a binary column for each category and returns a sparse matrix or dense array. 
- We are then able to fit and transform  OneHotEncoder using  categorical variable list.
The next step is to preprocess  encoded data so that we can fit our training and testing sets.
- Then merge one-hot encoded features and drop  originals. <br>

Define  features and target
- Target: Have you been diagnosed with a mental health disorder - Yes
- Features: Have you been diagnosed with a mental health disorder - No; Have you been diagnosed with a mental health disorder - Yes <br>
- Split into  training and testing sets

 
#### Analysis


### Dashboard

