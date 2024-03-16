import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const ContacForm= ({onCreate}) =>{
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[phone, setPhone] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onCreate({name,email,phone})

    }
    return (
            <Form onSubmit={handleSubmit} className="formData">
      <Form.Group className="mb-3" controlId="formBasicEmail" value={email} onChange={(e) => setEmail(e.target.value)}>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName" value={name} onChange={(e) => setName(e.target.value)}>
        <Form.Label>Nombre y apellido</Form.Label>
        <Form.Control type="text" placeholder="Nombre y apellido" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhone" value={phone} onChange={(e) => setPhone(e.target.value)}>
        <Form.Label>Numero de telefono</Form.Label>
        <Form.Control type="number" placeholder="Phone" />
      </Form.Group>
      <Button variant="primary" type="submit">
            Generar orden
      </Button>
    </Form>
    )
}

export default ContacForm