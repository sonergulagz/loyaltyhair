import React, { useState } from 'react'
import styled from 'styled-components'

const FormContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #3498db;
  }
`

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #3498db;
  }
`

const SubmitButton = styled.button`
  padding: 1rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #2980b9;
  }
`

const SelectedAreas = styled.div`
  margin-bottom: 1rem;
  padding: 0.8rem;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #ddd;
`

interface ContactFormProps {
  selectedAreas: string[]
}

const ContactForm: React.FC<ContactFormProps> = ({ selectedAreas }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form gönderme işlemi burada yapılacak
    console.log('Form data:', { ...formData, selectedAreas })
    alert('Form başarıyla gönderildi!')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const getAreaTitle = (areaId: string) => {
    const titles: { [key: string]: string } = {
      front: 'Ön Bölge',
      top: 'Üst Bölge',
      crown: 'Tepe Bölgesi'
    }
    return titles[areaId] || areaId
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        {selectedAreas.length > 0 && (
          <SelectedAreas>
            <strong>Seçilen Bölgeler:</strong>
            <br />
            {selectedAreas.map(area => getAreaTitle(area)).join(', ')}
          </SelectedAreas>
        )}
        
        <Input
          type="text"
          name="name"
          placeholder="Adınız Soyadınız"
          value={formData.name}
          onChange={handleChange}
          required
        />
        
        <Input
          type="email"
          name="email"
          placeholder="E-posta Adresiniz"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <Input
          type="tel"
          name="phone"
          placeholder="Telefon Numaranız"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        
        <TextArea
          name="message"
          placeholder="Mesajınız"
          value={formData.message}
          onChange={handleChange}
          required
        />
        
        <SubmitButton type="submit">
          Gönder
        </SubmitButton>
      </Form>
    </FormContainer>
  )
}

export default ContactForm 