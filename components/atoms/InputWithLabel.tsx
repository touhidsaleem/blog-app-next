import React from "react";
// import { StyleSheet, Text, TextInput } from "react-native";

export default function InputWithLabel(props: any) {
    const {
        inputLabel,
        // labelStyle,
        placeholder,
        // textStyle,
        autoComplete,
        value,
        onChangeText,
        editable,
        error,
        multiLine,
        inputCss
    } = props;
    return (
        <>
            <label>{inputLabel}</label>
            <input
                placeholder={placeholder}
                // style={[styles.textInput, textStyle, error ? styles.error : null]}
                editable={editable}
                onChangeText={onChangeText}
                value={value}
                autoComplete={autoComplete}
                selectionColor={error ? "red" : null}
                multiLine={multiLine}
                className={inputCss}
                // textAlignVertical={multiLine ? "top" : "center"}
                {...props}
            />
        </>
    );
}

// const styles = StyleSheet.create({
//     error: {
//         borderColor: "red",
//     },
//     label: {
//         marginTop: 20,
//         marginBottom: 5,
//         color: "#888888",
//         fontSize: 12,
//     },
//     textInput: {
//         borderWidth: 1,
//         borderColor: "#b1b1b1",
//         borderRadius: 5,
//         height: 50,
//         width: "100%",
//         padding: 10,
//         color: "#212121",
//     },
// });