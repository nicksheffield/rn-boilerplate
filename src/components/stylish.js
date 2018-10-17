import {
	View as NativeView,
	Text as NativeText,
	Image as NativeImage,
} from 'react-native'
import { createStylishComponent } from 'stylish'

export const View = createStylishComponent(NativeView)
export const Text = createStylishComponent(NativeText)
export const Image = createStylishComponent(NativeImage)
