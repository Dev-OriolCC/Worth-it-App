import { FC } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"

import { Button } from "@/components/Button"
import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { useAuth } from "@/context/AuthContext"
import { isRTL } from "@/i18n"
import type { AppStackScreenProps } from "@/navigators/navigationTypes"
import { useAppTheme } from "@/theme/context"
import { $styles } from "@/theme/styles"
import type { ThemedStyle } from "@/theme/types"
import { useHeader } from "@/utils/useHeader"
import { useSafeAreaInsetsStyle } from "@/utils/useSafeAreaInsetsStyle"

const welcomeLogo = require("@assets/images/logo.png")

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

export const WelcomeScreen: FC<WelcomeScreenProps> = function WelcomeScreen(_props) {
  const { themed, theme } = useAppTheme()

  const { navigation } = _props
  const { logout } = useAuth()

  function goNext() {
    navigation.navigate("Onboarding2")
  }

  useHeader(
    {
      rightTx: "common:logOut",
      onRightPress: logout,
    },
    [logout],
  )


  return (
    // contentContainerStyle={$styles.flex1}
    <Screen preset="fixed" contentContainerStyle={$styles.flex1}>
      <View style={themed($topContainer)}>
        <Image style={themed($welcomeLogo)} source={welcomeLogo} resizeMode="contain" />
        <Text
          testID="welcome-heading"
          style={themed($welcomeHeading)}
          tx="onboardingScreen1:welcomeTitle"
          preset="heading"
        />
        <Text tx="onboardingScreen1:welcomeSubText" preset="subheading" />

      </View>
      <View>
        <Button
          testID="next-screen-button"
          preset="reversed"
          style={themed($customButtonStyle)}
          tx="onboardingScreen1:letsGo"
          onPress={goNext}
        />
      </View>
    </Screen>
  )
}

const $topContainer: ThemedStyle<ViewStyle> = ({ spacing, colors }) => ({
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: "57%",
  justifyContent: "center",
  paddingHorizontal: spacing.lg,
})
const $customButtonStyle: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
  backgroundColor: colors.error, // TODO: Update Color
  borderRadius: 100,
  marginHorizontal: spacing.md,
  marginBottom: "30%"
})

const $welcomeLogo: ThemedStyle<ImageStyle> = ({ spacing }) => ({
  height: 88,
  width: "100%",
  marginBottom: spacing.xxl,
})

const $welcomeHeading: ThemedStyle<TextStyle> = ({ spacing }) => ({
  marginBottom: spacing.md,
})
