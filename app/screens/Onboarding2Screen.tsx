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
import { spacing } from '../theme/spacing';
import { colors } from '../theme/colors';
import { TextField } from "@/components/TextField"

interface Onboarding2ScreenProps extends AppStackScreenProps<"Onboarding2"> {}

export const Onboarding2Screen : FC<Onboarding2ScreenProps> = function Onboarding2Screen(_props) {
    const { themed, theme } = useAppTheme()
    const { navigation } = _props
    const { logout } = useAuth()

    function goNext() {
        navigation.navigate("Demo", { screen: "DemoShowroom", params: {} })
    }

    return (
        <Screen contentContainerStyle={$styles.flex1}>
            <View style={themed($topContainer)}>
                <Text 
                    tx="onboardingScreen2:title"
                    preset="heading"
                />
                <Text tx="onboardingScreen2:subTitle" preset="subheading" />
                {/* //TODO: Add 4 Inputs */}
                <TextField
                    // status="error"
                    value="Labore occaecat in id eu commodo aliquip occaecat veniam officia pariatur."
                    labelTx="demoTextField:useCase.statuses.noStatus.label"
                    labelTxOptions={{ prop: "label" }}
                    helperTx="demoTextField:useCase.statuses.noStatus.helper"
                    helperTxOptions={{ prop: "helper" }}
                    placeholderTx="demoTextField:useCase.statuses.noStatus.placeholder"
                    placeholderTxOptions={{ prop: "placeholder" }}
                />

                <Button
                    preset="reversed"
                    style={themed($customButtonStyle)}
                    tx="onboardingScreen1:letsGo"
                    onPress={goNext}
                />
            </View>
        </Screen>
    )
}

const $customButtonStyle: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
    backgroundColor: colors.error, // TODO: Update Color
    borderRadius: 100,
    marginHorizontal: spacing.md,
    marginBottom: "30%"
})

const $topContainer: ThemedStyle<ViewStyle> = ({spacing, colors}) => ({
    paddingHorizontal: spacing.lg,
    marginTop: "10%"
})