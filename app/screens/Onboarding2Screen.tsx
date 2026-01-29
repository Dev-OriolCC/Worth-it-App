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
                
                <View
                    style={themed($inputStyle)}
                    >
                    <TextField
                        // status="error"
                        value=""
                        labelTx="onboardingScreen2:useCase.statuses.noStatus.label"
                        labelTxOptions={{ prop: "label" }}
                        helperTx="onboardingScreen2:useCase.statuses.noStatus.helper"
                        helperTxOptions={{ prop: "helper" }}
                        placeholderTx="onboardingScreen2:useCase.statuses.noStatus.placeholder"
                        placeholderTxOptions={{ prop: "placeholder" }}
                    />
                </View>

                <View
                    style={themed($inputStyle)}
                    >
                    <TextField
                        // status="error"
                        value=""
                        labelTx="onboardingScreen2:hours.statuses.noStatus.label"
                        labelTxOptions={{ prop: "label" }}
                        helperTx="onboardingScreen2:hours.statuses.noStatus.helper"
                        helperTxOptions={{ prop: "helper" }}
                        placeholderTx="onboardingScreen2:hours.statuses.noStatus.placeholder"
                        placeholderTxOptions={{ prop: "placeholder" }}
                    />
                </View>

                <View
                    style={themed($inputStyle)}
                    >
                    <TextField
                        // status="error"
                        value=""
                        labelTx="onboardingScreen2:workdays.statuses.noStatus.label"
                        labelTxOptions={{ prop: "label" }}
                        helperTx="onboardingScreen2:workdays.statuses.noStatus.helper"
                        helperTxOptions={{ prop: "helper" }}
                        placeholderTx="onboardingScreen2:workdays.statuses.noStatus.placeholder"
                        placeholderTxOptions={{ prop: "placeholder" }}
                    />
                </View>

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

const $topContainer: ThemedStyle<ViewStyle> = ({spacing, colors}) => ({
    flexShrink: 1,
    flexGrow: 1,
    flexBasis: "57%",
    justifyContent: "center",
    paddingHorizontal: spacing.lg
    
})

const $inputStyle: ThemedStyle<ViewStyle> = ({spacing}) => ({
    marginVertical: "2.5%"
})

const $customButtonStyle: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
    backgroundColor: colors.error, // TODO: Update Color
    borderRadius: 100,
    marginTop: "2.5%",
    marginHorizontal: spacing.md
})
