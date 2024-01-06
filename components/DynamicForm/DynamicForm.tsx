/* eslint-disable react/jsx-no-useless-fragment */

import React, { FunctionComponent } from "react";
// import { StyleSheet, View } from "react-native";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import InputWithLabel from "../atoms/InputWithLabel";
// import { Select, SelectItem } from "@ui-kitten/components";
// import { Box, Text, Button } from "@react-native-material/core";

interface Field {
    key: string;
    label: string;
    placeholder?: string;
    validations?: { key: string; value: any; message: string }[];
    options?: { label: string }[];
    isEditable?: boolean;
    isMultiLine?: boolean;
}

interface DynamicFormProps {
    dataKey: string;
    formLabel?: string | null;
    fields: Field[];
    onSubmit: (formData: any, dataKey: string) => void;
    defaultValues?: Record<string, any>;
    isEditingEnabled?: boolean;
}

const DynamicForm: FunctionComponent<DynamicFormProps> = ({
    dataKey,
    formLabel,
    fields,
    onSubmit,
    defaultValues,
    isEditingEnabled = false,
}) => {
    const {
        handleSubmit,
        formState: { errors },
        control,
    } = useForm({ mode: "onChange", defaultValues });

    // const onSubmitEvent: SubmitHandler<any> = (data) => {
    //     const formData = fields.reduce((formData, fieldData) => {
    //         formData[fieldData.key] = data[fieldData.key];
    //         return formData;
    //     }, {});

    //     onSubmit(formData, dataKey);
    // };

    const getValidations = (validations: Field["validations"]) => {
        if (validations?.length) {
            return validations.reduce((rules, validation) => {
                rules[validation.key] = validation.value;
                return rules;
            }, {} as Record<string, any>);
        } else return {};
    };

    return (
        <>
            <div >{formLabel || null}</div>
            <div>
                {/* <Box component="form" onSubmit={handleSubmit(onSubmitEvent)}> */}
                <>
                    {fields.map((field) => {
                        const fieldName = field.key;
                        return (
                            <div style={{ marginBottom: 10 }} key={fieldName}>
                                {!field?.options ? (
                                    <>
                                        <Controller
                                            control={control}
                                            rules={getValidations(field.validations)}
                                            render={({ field: { onChange, onBlur, value } }) => (
                                                <InputWithLabel
                                                    inputLabel={field.label}
                                                    placeholder={field?.placeholder}
                                                    // labelStyle={styles.label}
                                                    // textStyle={styles.textInput}
                                                    onChangeText={onChange}
                                                    value={value}
                                                    error={errors?.[fieldName] ? true : false}
                                                    editable={isEditingEnabled && field?.isEditable}
                                                    multiline={field?.isMultiLine}
                                                />
                                            )}
                                            name={fieldName}
                                        />
                                        {field?.validations?.map((validation) => {
                                            if (
                                                errors?.[fieldName]?.type === validation.key &&
                                                isEditingEnabled
                                            ) {
                                                return (
                                                    <div role="alert" color="red" key={`${fieldName}-${validation.key}`}>
                                                        {validation.message}
                                                    </div>
                                                );
                                            }
                                            return null;
                                        })}
                                    </>
                                ) : (
                                    ''
                                    // <>
                                    //     <Controller
                                    //         name={fieldName}
                                    //         control={control}
                                    //         rules={getValidations(field.validations)}
                                    //         render={({ field: { onChange, value } }) => (
                                    //             <Select
                                    //                 value={value}
                                    //                 disabled={!isEditingEnabled && !field?.isEditable}
                                    //                 onSelect={(index) =>
                                    //                     onChange(field.options[index.row].label)
                                    //                 }
                                    //             >
                                    //                 {field.options.map((timeUnit, index) => (
                                    //                     <SelectItem
                                    //                         key={`select-option-${index}`}
                                    //                         title={(evaProps) => (
                                    //                             <Text {...evaProps} style={styles.SelectText}>
                                    //                                 {timeUnit.label}
                                    //                             </Text>
                                    //                         )}
                                    //                     />
                                    //                 ))}
                                    //             </Select>
                                    //         )}
                                    //     />
                                    //     {field?.validations?.map((validation) => {
                                    //         if (
                                    //             errors?.[fieldName]?.type === validation.key &&
                                    //             isEditingEnabled
                                    //         ) {
                                    //             return (
                                    //                 <Text role="alert" color="red" key={`${fieldName}-${validation.key}`}>
                                    //                     {validation.message}
                                    //                 </Text>
                                    //             );
                                    //         }
                                    //         return null;
                                    //     })}
                                    // </>
                                )}
                            </div>
                        );
                    })}
                </>
                {isEditingEnabled && (
                    <div>
                        <button title="Save" />
                        {/* <button title="Save" onClick={handleSubmit(onSubmitEvent)} /> */}
                    </div>
                )}
            </div>
        </>
    );
};

export default DynamicForm;

// const styles = StyleSheet.create({
//   SelectText: {
//     fontWeight: "400",
//   },
// });
