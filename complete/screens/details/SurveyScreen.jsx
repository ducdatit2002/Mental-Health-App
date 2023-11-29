import React, { useState } from "react"
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { COLORS, SIZES, TEXT } from "../../constants/theme"
import { ReusableText, ReusableBtn, HeightSpacer } from "../../components/index"
import questions from "../../data.json" // Your questions JSON file

const SurveyScreen = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [answers, setAnswers] = useState([])

  const handleSelectOption = (option) => {
    setSelectedOption(option)
    setAnswers([
      ...answers,
      {
        question: questions.recommendations[currentQuestionIndex].question,
        answer: option,
      },
    ])
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.recommendations.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedOption(null)
    } else {
      navigation.navigate("ResultsScreen", { answers })
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View>
        <ReusableText
          text={`Question ${currentQuestionIndex + 1} of ${
            questions.recommendations.length
          }`}
          family={"medium"}
          size={TEXT.large}
          color={COLORS.black}
        />
        <HeightSpacer height={SIZES.base} />
        <ReusableText
          text={questions.recommendations[currentQuestionIndex].question}
          family={"medium"}
          size={TEXT.medium}
          color={COLORS.black}
        />
        <HeightSpacer height={SIZES.base} />
        {questions.recommendations[currentQuestionIndex].options.map(
          (option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.option,
                selectedOption === option && styles.selectedOption,
              ]}
              onPress={() => handleSelectOption(option)}
            >
              <ReusableText
                text={option}
                family={"regular"}
                size={TEXT.medium}
                color={COLORS.primary}
              />
            </TouchableOpacity>
          )
        )}
        <HeightSpacer height={SIZES.base} />
        <ReusableBtn
          onPress={handleNextQuestion}
          btnText={"Next Question"}
          width={SIZES.width - SIZES.padding * 2}
          backgroundColor={COLORS.green}
          borderColor={COLORS.transparent}
          borderWidth={0}
          textColor={COLORS.white}
        />
      </View>
    </ScrollView>
  )
}

export default SurveyScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: SIZES.padding,
    marginHorizontal: SIZES.padding,
  },
  option: {
    backgroundColor: COLORS.lightGray,
    padding: SIZES.base,
    marginVertical: SIZES.base,
    borderRadius: SIZES.radius,
  },
  selectedOption: {
    backgroundColor: COLORS.lightGreen,
  },
})
