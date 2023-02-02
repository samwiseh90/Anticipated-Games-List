import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label } from "reactstrap";
import { Formik, Field, Form } from "formik";

const GameEntryForm = ({ id }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleSubmit = (values) => {
        const game = {
            id: parseInt(id),
            gameTitle: values.gameTitle,
            rating: values.rating,
            platform: values.platform
        };
        console.log(game);
        setModalOpen(false);
    };

    return (
        <>
            <Button className='button' outline onClick={() => setModalOpen(true)}><i className='fa fa-pencil fa-lg' />Add Game</Button>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false)}>Add Game</ModalHeader>
                <ModalBody>
                    <Formik 
                        initialValues={{
                            gameTitle: '',
                            rating: undefined,
                            platform: ''
                        }}
                        onSubmit={handleSubmit}>
                            <Form>
                                <FormGroup>
                                    <Label htmlFor="gameTitle">Game Title</Label>
                                    <Field 
                                        name='gameTitle'
                                        placeholder='Game Title'
                                        className='form-control'
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="rating">Personal Rating</Label>
                                    <Field
                                        name='rating'
                                        as='select'
                                        className='form-control'
                                    >
                                        <option>Select...</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </Field>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="platform">Platform</Label>
                                    <Field
                                        name='platform'
                                        placeholder='Platform'
                                        className='form-control'
                                    />
                                </FormGroup>
                                <Button className='submitButton' type='submit' color='primary'>
                                    Add Game
                                </Button>
                            </Form>
                        </Formik>
                </ModalBody>
            </Modal>
        </>
    )

} 

export default GameEntryForm;