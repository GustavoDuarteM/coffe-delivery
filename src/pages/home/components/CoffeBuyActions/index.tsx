import { useForm } from 'react-hook-form'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { CoffeBuyActionsContainer, CoffeAmount, CoffeCartIncon } from './styles'
import React from 'react'

interface CoffeBuyActionsProps {
  coffeId: string
}

export function CoffeBuyActions({ coffeId }: CoffeBuyActionsProps) {
  const { register, handleSubmit, getValues, setValue, watch } = useForm({
    defaultValues: {
      ammount: 0,
      id: coffeId,
    },
  })

  function handleAddCoffeToCart() {
    const inputName = `ammount`
    const inputValue = getValues(inputName) | 0
    if (inputValue <= 0) return

    // proxy to provider cart
    setValue(inputName, 0)
  }

  function handleAddCoffeAmount(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    event.preventDefault()
    const inputName = 'ammount'
    const inputValue = getValues(inputName) | 0
    setValue(inputName, inputValue + 1)
  }

  function handleRemoveCoffeAmount(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    event.preventDefault()
    const inputName = 'ammount'
    const inputValue = getValues(inputName) | 0
    if (inputValue <= 0) return
    setValue(inputName, inputValue - 1)
  }

  const ammount = watch('ammount') | 0
  return (
    <form key={coffeId}>
      <input hidden {...register('ammount')} />
      <input hidden {...register('id')} />
      <CoffeBuyActionsContainer>
        <CoffeAmount>
          <button onClick={handleRemoveCoffeAmount}>
            <Minus size={16} />
          </button>
          <span>{ammount}</span>
          <button onClick={handleAddCoffeAmount}>
            <Plus size={16} />
          </button>
        </CoffeAmount>

        <CoffeCartIncon onClick={handleSubmit(handleAddCoffeToCart)}>
          <ShoppingCart size={24} weight="fill" />
        </CoffeCartIncon>
      </CoffeBuyActionsContainer>
    </form>
  )
}
