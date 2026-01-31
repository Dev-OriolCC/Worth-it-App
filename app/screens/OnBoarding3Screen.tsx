import { FC, useState } from "react"
import { TextStyle, View, ViewStyle, TouchableOpacity } from "react-native"

import { Button } from "@/components/Button"
import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import type { AppStackScreenProps } from "@/navigators/navigationTypes"
import { useAppTheme } from "@/theme/context"
import { $styles } from "@/theme/styles"
import type { ThemedStyle } from "@/theme/types"
import { TxKeyPath } from "@/i18n"

interface Onboarding3ScreenProps extends AppStackScreenProps<"Onboarding3"> { }

export const Onboarding3Screen: FC<Onboarding3ScreenProps> = function Onboarding3Screen(_props) {
    const { themed, theme } = useAppTheme()
    const { navigation } = _props

    const [selectedCategories, setSelectedCategories] = useState<string[]>([])

    const categories: { id: string; labelTx: TxKeyPath }[] = [
        { id: "foodAndDrinks", labelTx: "onboardingScreen3:categories.foodAndDrinks" },
        { id: "toys", labelTx: "onboardingScreen3:categories.toys" },
        { id: "fashion", labelTx: "onboardingScreen3:categories.fashion" },
        { id: "gadgets", labelTx: "onboardingScreen3:categories.gadgets" },
        { id: "decoration", labelTx: "onboardingScreen3:categories.decoration" },
        { id: "art", labelTx: "onboardingScreen3:categories.art" },
    ]

    function toggleCategory(id: string) {
        if (selectedCategories.includes(id)) {
            setSelectedCategories(selectedCategories.filter((c) => c !== id))
        } else {
            setSelectedCategories([...selectedCategories, id])
        }
    }

    function goNext() {
        navigation.navigate("Demo", { screen: "DemoShowroom", params: {} })
    }

    return (
        <Screen contentContainerStyle={$styles.flex1}>
            <View style={themed($topContainer)}>
                <Text tx="onboardingScreen3:title" preset="heading" />
                <Text tx="onboardingScreen3:subTitle" preset="subheading" style={themed($subTitle)} />

                <View style={themed($categoriesContainer)}>
                    {categories.map((category) => {
                        const isSelected = selectedCategories.includes(category.id)
                        return (
                            <TouchableOpacity
                                key={category.id}
                                style={[
                                    themed($categoryButton),
                                    isSelected && { backgroundColor: "#D0C9FF" }, // Light purple for selected
                                    !isSelected && { backgroundColor: "#EBEBF5" }, // Light gray for unselected
                                ]}
                                onPress={() => toggleCategory(category.id)}
                            >
                                <Text
                                    tx={category.labelTx}
                                    style={[
                                        themed($categoryText),
                                        isSelected && { color: "#19102E" }, // Dark text for selected
                                        !isSelected && { color: "#19102E" }, // Dark text for unselected
                                        { fontWeight: "600" }
                                    ]}
                                />
                            </TouchableOpacity>
                        )
                    })}
                </View>

                <Button
                    preset="reversed"
                    style={themed($customButtonStyle)}
                    tx="onboardingScreen3:nextBtn"
                    onPress={goNext}
                />
            </View>
        </Screen>
    )
}

const $topContainer: ThemedStyle<ViewStyle> = ({ spacing }) => ({
    flexShrink: 1,
    flexGrow: 1,
    flexBasis: "57%",
    justifyContent: "center",
    paddingHorizontal: spacing.lg,
})

const $subTitle: ThemedStyle<TextStyle> = ({ spacing }) => ({
    marginBottom: spacing.lg,
})

const $categoriesContainer: ThemedStyle<ViewStyle> = ({ spacing }) => ({
    marginVertical: spacing.md,
    gap: spacing.sm,
})

const $categoryButton: ThemedStyle<ViewStyle> = ({ spacing }) => ({
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
})

const $categoryText: ThemedStyle<TextStyle> = () => ({
    fontSize: 16,
})

const $customButtonStyle: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
    backgroundColor: "#D0C9FF", // Light purple from mockup
    borderRadius: 100,
    marginTop: spacing.xl,
    marginHorizontal: spacing.md,
})
