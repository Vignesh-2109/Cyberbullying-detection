import React from 'react';
import './About.css';
import { FaArrowUp } from 'react-icons/fa';

const About = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="about-container">
      <div className="about-section">
        <h1 className="section-title">About the Project</h1>
        <div className="section-content">
          <p>
            The absence of an automated, scalable, and real-time cyberbullying detection system is the main issue this project attempts to solve. Managing the enormous volume of unstructured text data, correctly spotting damaging content among the noise, and comprehending the subtleties and context of language used in cyberbullying are some of the main challenges. The system must also handle imbalanced datasets, where there are significantly more examples of non-cyberbullying content than there are cyberbullying incidents.
          </p>
          <p>
            The aim of this research is to create a cyberbullying detection system that is both efficient and effective by leveraging the latest techniques in natural language processing and machine learning. The system should be capable of processing large amounts of text data and identifying potential cases of cyberbullying in real-time to mitigate harm. By addressing these challenges, the project aims to contribute to creating a safer online environment where people can interact without fear of harassment or mistreatment.
          </p>
        </div>
      </div>

      <div className="about-section">
        <h2 className="section-title">Problem Statement</h2>
        <div className="section-content">
          <p>
            The absence of an automated, scalable, and real-time cyberbullying detection system is the main issue this project attempts to solve. Managing the enormous volume of unstructured text data, correctly spotting damaging content among the noise, and comprehending the subtleties and context of language used in cyberbullying are some of the main challenges. The system must also handle imbalanced datasets, where there are significantly more examples of non-cyberbullying content than there are cyberbullying incidents.
          </p>
          <p>
            The aim of this research is to create a cyberbullying detection system that is both efficient and effective by leveraging the latest techniques in natural language processing and machine learning. The system should be capable of processing large amounts of text data and identifying potential cases of cyberbullying in real-time to mitigate harm. By addressing these challenges, the project aims to contribute to creating a safer online environment where people can interact without fear of harassment or mistreatment.
          </p>
        </div>
      </div>

      <div className="about-section">
        <h2 className="section-title">Overview of the Project</h2>
        <div className="section-content">
          <ol>
            <li>
              <strong>Data Collection</strong><br />
              Collected multiple datasets focusing on cyberbullying from various sources. Selected a feasible dataset named 'cyberbullying_tweets' containing columns 'tweet_text', 'cyberbullying_type', and labels such as 'not_cyberbullying', 'gender', 'religion', 'other_cyberbullying', 'age', and 'ethnicity'.
            </li>
            <li>
              <strong>Data Preprocessing</strong>
              <ol>
                <li><strong>Text Cleaning</strong><br />
                  Removing Special Characters and Punctuation: Text data often contains special characters, punctuation marks, and numbers that do not contribute to the analysis. Removing these elements ensures that the text is clean and free from noise. This step involves using regular expressions to filter out unwanted characters.
                  Lowercasing: Converting all characters to lowercase ensures uniformity and prevents the model from treating the same words with different cases as separate entities. For example, "Cyberbullying" and "cyberbullying" would be considered the same word.
                </li>
                <li><strong>Tokenization</strong><br />
                  Definition: Tokenization is the process of breaking down text into individual words or tokens. This is a fundamental step in NLP as it prepares the text for further processing.
                  Implementation: Libraries like NLTK (Natural Language Toolkit) and SpaCy provide efficient tokenizers that can handle complex tokenization tasks, including dealing with punctuation, special characters, and contractions. For example, "I'm" would be tokenized into ["I", "am"].
                </li>
                <li><strong>Stopword Removal</strong><br />
                  Definition: Stopwords are common words that do not contribute significant meaning to the text, such as "and", "the", "is", etc. Removing stopwords reduces the dimensionality of the data and focuses on the meaningful words.
                  Implementation: Using predefined lists from libraries like NLTK or SpaCy, stopwords are removed from the tokenized text. This step helps in reducing noise and improving the performance of machine learning models.
                </li>
                <li><strong>Lemmatization and Stemming</strong><br />
                  Lemmatization: This process reduces words to their base or root form while ensuring that the transformed word is a valid word in the language. For example, "running" is lemmatized to "run", and "better" is lemmatized to "good". Lemmatization considers the context and parts of speech to produce meaningful root forms.
                  Stemming: This technique also reduces words to their root form but may not always result in a valid word. For example, "running" might be stemmed to "run", but "runner" might be stemmed to "runn". Stemming is faster but less accurate compared to lemmatization. Implementation: Libraries like NLTK provide tools like WordNetLemmatizer and PorterStemmer to perform these operations. Choosing between lemmatization and stemming depends on the specific requirements of the analysis.
                </li>
                <li><strong>Handling Imbalanced Classes</strong><br />
                  Oversampling and Undersampling: In many datasets, the classes might be imbalanced, meaning some classes have significantly more samples than others. Techniques like SMOTE (Synthetic Minority Over-sampling Technique) are used to balance the class distribution. SMOTE generates synthetic samples for the minority class by interpolating between existing samples. Implementation: Libraries like imbalanced-learn provide easy-to-use implementations of oversampling and undersampling techniques. This step is crucial for improving the performance of machine learning models by providing them with a balanced view of the classes.
                </li>
              </ol>
            </li>
          </ol>
        </div>
      </div>

      <div className="about-section">
        <h2 className="section-title">Embedding Techniques</h2>
        <div className="section-content">
          <p>
            Collected and integrated pre-trained GloVe embeddings.
          </p>
          <ul>
            <li><strong>Text to Numerical Conversion</strong>: GloVe embeddings convert textual data into numerical format, making it suitable for machine learning models. Each word in a text is replaced by its corresponding vector from the GloVe embeddings.</li>
            <li><strong>Semantic Similarity</strong>: GloVe captures semantic similarities between words. For instance, "bully" and "harass" will have similar vectors, helping the model understand context even if different words are used.</li>
            <li><strong>Contextual Understanding</strong>: By converting words into vectors that capture their meanings, the model can better understand the context in which words are used, which is crucial for detecting nuanced and context-dependent phenomena like cyberbullying.</li>
          </ul>
        </div>
      </div>

      <div className="about-section">
        <h2 className="section-title">Multimodal Approach</h2>
        <div className="section-content">
          <p>
            Incorporating multiple data modalities can significantly enhance the performance of cyberbullying detection models.
          </p>
          <p>
            Explored methods to convert audio data into text.
          </p>
          <p>
            Prepared a pipeline to process both text and audio data for multimodal analysis.
          </p>
        </div>
      </div>
      <div className="about-section">
        <h2 className="section-title">Model Exploration</h2>
        <div className="section-content">
          <p>
            Studied various models and their applications in cyberbullying detection, including:
          </p>
          <ol>
            <li>
              <strong>GRU (Gated Recurrent Unit)</strong><br />
              <p>Description: GRUs are a type of recurrent neural network (RNN) designed to handle sequential data by maintaining a hidden state that captures information from previous time steps. GRUs address the vanishing gradient problem, which is common in traditional RNNs, by using gating mechanisms to control the flow of information.</p>
              <p>Architecture: GRUs consist of two main gates: the update gate and the reset gate. The update gate determines how much of the past information needs to be passed to the future, while the reset gate decides how much of the past information to forget.</p>
              <p>Application: In the context of cyberbullying detection, GRUs can model the sequential nature of text, capturing context from previous words and phrases to understand the overall meaning. This makes them suitable for identifying patterns indicative of cyberbullying.</p>
            </li>
            <li>
              <strong>Bi-GRU (Bidirectional GRU)</strong><br />
              <p>Description: Bi-GRU extends the GRU by processing the sequence both forwards and backwards. This allows the model to capture dependencies from both past and future contexts, enhancing its ability to understand the nuances and context of language.</p>
              <p>Architecture: Bi-GRU consists of two GRU networks: one processing the sequence in the forward direction and another in the backward direction. The outputs from both networks are concatenated or combined in some manner to provide a comprehensive representation of the sequence.</p>
              <p>Application: By leveraging information from both directions, Bi-GRUs excel in tasks requiring a deep understanding of context and dependencies, such as identifying subtle signs of cyberbullying that may span across different parts of a text.</p>
            </li>
            <li>
              <strong>LSTM (Long Short-Term Memory)</strong><br />
              <p>Description: LSTMs are another type of recurrent neural network that addresses the shortcomings of traditional RNNs, particularly in handling long-range dependencies and maintaining information over extended sequences.</p>
              <p>Architecture: LSTMs incorporate a more complex memory cell structure compared to GRUs, with separate input, output, and forget gates that regulate the flow of information. This allows LSTMs to retain important information over longer time scales without suffering from the vanishing gradient problem.</p>
              <p>Application: In cyberbullying detection, LSTMs can effectively model the temporal dependencies and semantic nuances in text data, enabling them to discern patterns indicative of cyberbullying behavior. Their ability to retain context over longer sequences makes them suitable for processing lengthy messages or conversations.</p>
            </li>
            <li>
              <strong>Bi-LSTM (Bidirectional LSTM)</strong><br />
              <p>Description: Bi-LSTM extends the LSTM architecture by processing sequences in both forward and backward directions, similar to Bi-GRU. This allows Bi-LSTMs to capture dependencies from both past and future contexts, making them well-suited for tasks requiring a comprehensive understanding of context and sequential data.</p>
              <p>Architecture: Bi-LSTM combines two LSTM networks: one processing the sequence in the forward direction and another in the backward direction. The outputs from both networks are typically concatenated or combined in some manner to provide a holistic representation of the sequence.</p>
              <p>Application: By leveraging bidirectional information flow, Bi-LSTMs excel in tasks like cyberbullying detection, where understanding the context and dependencies across a text is crucial for accurately identifying instances of harmful behavior. They can capture nuanced patterns that span across different parts of a text, improving the model's ability to detect subtle signs of cyberbullying.</p>
            </li>
          </ol>
        </div>
      </div>

      <div className="about-section">
        <h2 className="section-title">Training and Evaluation</h2>
        <div className="section-content">
          <p>
            For each model, the training process involved:
          </p>
          <ul>
            <li>Data Splitting: The dataset was divided into training, validation, and test sets to assess model performance.</li>
            <li>Hyperparameter Tuning: Hyperparameters such as learning rate, batch size, and optimizer were optimized using techniques like grid search or random search.</li>
            <li>Model Training: The models were trained on the training set using techniques such as backpropagation and gradient descent to minimize loss and improve accuracy.</li>
            <li>Evaluation Metrics: Performance was evaluated using metrics such as accuracy, precision, recall, F1-score, and area under the ROC curve (AUC).</li>
            <li>Model Comparison: The performance of different models was compared to identify the most effective approach for cyberbullying detection.</li>
          </ul>
        </div>
      </div>

      <div className="about-section">
        <h2 className="section-title">Web Application Development</h2>
        <div className="section-content">
          <p>
            Designed and implemented a web application for cyberbullying detection using Flask and React.
          </p>
          <ul>
            <li>Frontend Development: Built the user interface using React.js, incorporating components for input forms and result display.</li>
            <li>Backend Development: Developed the server-side application using Flask, integrating the trained machine learning model for real-time prediction.</li>
            <li>Integration: Established communication between the frontend and backend using RESTful APIs to facilitate seamless data exchange.</li>
            <li>Deployment: Deployed the web application on a cloud platform like Heroku or AWS for accessibility.</li>
            <li>User Interaction: Enabled users to input text or audio for cyberbullying detection, displaying the results interactively on the interface.</li>
          </ul>
        </div>
      </div>

      <div className="about-section">
        <h2 className="section-title">Comparision</h2>
        <div className="section-content">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Model</th>
                <th>Accuracy</th>
                <th>Precision</th>
                <th>Recall</th>
                <th>F1 Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>GRU</td>
                <td>57.91%</td>
                <td>82.74%</td>
                <td>36.89%</td>
                <td>51.02%</td>
              </tr>
              <tr>
                <td>Bi-GRU</td>
                <td>60.66%</td>
                <td>84.15%</td>
                <td>40.57%</td>
                <td>54.74%</td>
              </tr>
              <tr>
                <td>LSTM</td>
                <td>79.46%</td>
                <td>86.66%</td>
                <td>68.86%</td>
                <td>76.74%</td>
              </tr>
              <tr>
                <td>Bi-LSTM</td>
                <td>81.25%</td>
                <td>88.02%</td>
                <td>71.83%</td>
                <td>79.10%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="about-section">
        <h2 className="section-title">Comparison of Techniques</h2>
        <div className="section-content">
          <ol>
            <li><strong>Models</strong>: Implemented various models like GRU, Bi-GRU, LSTM, and Bi-LSTM for classification tasks.</li>
            <li><strong>Performance Metrics</strong>: Compared the performance of models based on accuracy, precision, and recall.</li>
          </ol>
        </div>
      </div>

      <div className="about-section">
        <h2 className="section-title">Future Work</h2>
        <div className="section-content">
          <p>
            Plan to experiment with more advanced architectures and optimization techniques to further improve model performance.
          </p>
          <ul>
            <li>Explore transformers and attention mechanisms for better context understanding.</li>
            <li>Implement ensemble methods to combine the strengths of multiple models.</li>
            <li>Investigate real-time detection capabilities to provide instant feedback and protection against cyberbullying.</li>
          </ul>
        </div>
      </div>
      <div className="about-section">
        <h2 className="section-title">Reports</h2>
        <div className="section-content">
          <p>
            You can view the detailed reports below:
          </p>
          <ul>
            <li><a href="https://drive.google.com/file/d/1I2aq8l0amF48E-vEx9j9cbyDAtWUNwhU/view?usp=sharing" target="_blank" rel="noopener noreferrer">Problem Statement</a></li>
            <li><a href="https://drive.google.com/file/d/1UVldhgjvjifjN-XQqml0HL_MBGCcliJP/view?usp=sharing" target="_blank" rel="noopener noreferrer">Intermediate Progress Report</a></li>
            <li><a href="https://drive.google.com/file/d/1Ezqc6SoiXTTJEJKesPogmdni0MkzUH-1/view?usp=sharing" target="_blank" rel="noopener noreferrer">Final Report</a></li>
            <li><a href="https://drive.google.com/file/d/1pkkPHOjDa9jyCb4khX9iY6nh_tAdCXdX/view?usp=sharing" target="_blank" rel="noopener noreferrer">IEEE Format Paper</a></li>
          </ul>
        </div>
      </div>

      <div className="scroll-to-top">
        <button className="scroll-button" onClick={scrollToTop}>
          <FaArrowUp />
          
        </button>
      </div>
    </div>
  );
};

export default About;
