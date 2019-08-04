from textblob import TextBlob


class SentimentService:
    """This class represents the knapsacks service"""

    def AnalyzeSentence(self, sentence):
        """Analyzes the sentiment of a given sentence"""

        polarity = TextBlob(sentence).sentences[0].polarity

        return sentence, polarity
