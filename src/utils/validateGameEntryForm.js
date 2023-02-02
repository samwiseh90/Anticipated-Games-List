export const validateGameEntryForm = (values) => {
    const errors = {};

    if (!values.gameTitle) {
        errors.gameTitle='Required';
    }

    return errors;
}