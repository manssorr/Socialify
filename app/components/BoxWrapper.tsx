import {colors} from '@utils';
import {ScrollView, StyleSheet, Text, View, type ViewProps} from 'react-native';

interface IProps extends ViewProps {
	scrollEnabled?: boolean;
}

const BoxWrapper = (props: IProps): React.ReactElement<IProps> => {
	const Wrapper = props.scrollEnabled ? ScrollView : View;

	return (
		<Wrapper style={[styles.container, props.style]}>{props.children}</Wrapper>
	);
};

export default BoxWrapper;

const styles = StyleSheet.create({
	container: {
		padding: 10,
		backgroundColor: colors.white,
		borderWidth: 0.5,
		borderRadius: 10,
		borderColor: colors.border,
	},
});
