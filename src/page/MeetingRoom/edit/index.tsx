import React, { useState } from "react";
import { Button, Form, Input, Modal } from 'antd';
import { MeetingInterface } from "../../../interface/IMeetingRoom"; // Adjust the path as necessary

interface EditPopupProps {
    room: MeetingInterface; // Room data to edit
    closePopup: () => void; // Function to close the popup
    onDelete?: (roomId: number) => void; // Function to handle room deletion
}

const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
};

const EditPopup: React.FC<EditPopupProps> = ({ room, closePopup, onDelete }) => {

    const handleDelete = () => {
        Modal.confirm({
            title: 'Are you sure you want to delete this room?',
            content: 'This action cannot be undone.',
            okText: 'Yes, Delete',
            cancelText: 'No, Cancel',
            onOk: () => onDelete(room.ID),
        });
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Form
                name="edit-form"
                onFinish={onFinish}
                initialValues={{
                    RoomName: room.RoomName,
                    Capacity: room.Capacity,
                    AirCondition: room.AirCondition,
                    Chair: room.Chair,
                    Type: room.Type,
                    Detail: room.Detail,
                }}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ width: 500 }}
            >
                <Form.Item
                    name='RoomName'
                    label="Room Name"
                    rules={[{ required: true, message: 'Room Name is required' }]}
                >
                    <Input placeholder="Room Name" />
                </Form.Item>

                <Form.Item
                    name='Capacity'
                    label="Max People"
                    rules={[{ required: true, message: 'Max people is required' }]}
                >
                    <Input placeholder="Max People" type="number"/>
                </Form.Item>

                <Form.Item
                    name='AirCondition'
                    label="Air Condition"
                    rules={[{ required: true, message: 'Air condition is required' }]}
                >
                    <Input placeholder="Air Condition" type="number" />
                </Form.Item>

                <Form.Item
                    name='Chair'
                    label="Chair"
                    rules={[{ required: true, message: 'Chair is required' }]}
                >
                    <Input placeholder="Chair" type="number" />
                </Form.Item>

                <Form.Item
                    name='Type'
                    label="Room Type"
                    rules={[{ required: true, message: 'Room Type is required' }]}
                >
                    <Input placeholder="Room Type" />
                </Form.Item>

                <Form.Item
                    name='Detail'
                    label="Details"
                >
                    <Input.TextArea rows={4} placeholder="Details" />
                </Form.Item>

                <Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: 'center' }}>
                    <Button type="primary" onClick={closePopup} htmlType="submit">
                        Submit
                    </Button>
                    <Button type="default" onClick={closePopup} style={{ marginLeft: 10 }}>
                        Cancel
                    </Button>
                    <Button type="danger" onClick={handleDelete} style={{ marginLeft: 10 }}>
                        Delete
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default EditPopup;
