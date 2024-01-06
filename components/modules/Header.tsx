
const Header = () => {
    const onSubmit = () => {
        console.log('safd');
    }
    return (
        <div>
            <div className="w-10 h-10 z-1 bg-primary-dark rounded-full relative"><div className="w-6 h-6 bg-primary absolute rounded-full top-0 left-[20%] z-10"></div></div>
            <h1 className="text-stone-900 text-2xl font-bold">Coranu</h1>
            {/* <DynamicForm
                    formLabel={""}
                    isEditingEnabled={true}
                    // BtnTitle="Save"
                    fields={[
                        {
                            key: "details",
                            label: "",
                            isMultiLine: true,
                            isEditable: true,
                            validations: [
                                {
                                    key: "required",
                                    value: true,
                                    message: "This is required field",
                                },
                            ],
                        },
                    ]}
                    defaultValues={{}}
                    // defaultValues={defaultValues}
                    // handleClose={handleClose}
                    onSubmit={onSubmit} dataKey={''} /> */}
        </div>
    )
}

export default Header