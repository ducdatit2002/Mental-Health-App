import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native"
import React, { useState } from "react"
import {
  NetworkImage,
  AppBar,
  HeightSpacer,
  ReusableText,
  DescriptionText,
  ReusableBtn,
  PopularList,
} from "../../components/index"
import { COLORS, TEXT, SIZES } from "../../constants/theme"
import reusable from "../../components/Reusable/reusable.style"
import { Feather } from "@expo/vector-icons"
import { useRoute } from "@react-navigation/native"
// import fetchPlace from "../../hook/fetchPlace"
import Loader from "../../components/Shimmers/Loader"
import data from "../../data.json"

const PlaceDetails = ({ navigation }) => {
  const route = useRoute()
  const id = route.params
  const [currentSurvey, setCurrentSurvey] = useState(null)
  const [selectedOption, setSelectedOption] = useState(null)
  // const { place, isLoading, error, refetch } = fetchPlace(id)

  // if (isLoading) {
  //   return <Loader />
  // }

  const handleSelectOption = (option) => {
    setSelectedOption(option)
    // Handle answer storage logic here
  }

  const handleNextQuestion = () => {
    // Handle next question logic here
    // For now, let's go back to the previous screen
    navigation.goBack()
  }

  const selectedRecommendation = data.recommendations.find(
    (rec) => rec._id === id
  ) // Assuming 'id' is obtained dynamically

  return (
    <ScrollView style={styles.container}>
      {selectedRecommendation && (
        <>
          <Image
            source={{ uri: selectedRecommendation.imageUrl }}
            style={styles.image}
            resizeMode="cover"
          />
          <ReusableText
            text={selectedRecommendation.title}
            family={"medium"}
            size={TEXT.large}
            color={COLORS.black}
          />
          <ReusableText
            text={selectedRecommendation.description}
            family={"regular"}
            size={TEXT.medium}
            color={COLORS.darkGray}
          />
          <HeightSpacer height={SIZES.base} />
          <ReusableText
            text={selectedRecommendation.question}
            family={"medium"}
            size={TEXT.medium}
            color={COLORS.primary}
          />
          <View>
            {selectedRecommendation.options.map((option, index) => (
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
            ))}
          </View>
        </>
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
    </ScrollView>
  )
}

export default PlaceDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.padding,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: SIZES.radius,
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
