import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

export const Button = ({
  children,
  className,
  variant = 'primary',
  to = '/',
  target
}) => {
  const internal = /^\/(?!\/)/.test(to)
  return (
    <Wrapper
      as={!internal ? 'a' : Link}
      href={internal ? null : to}
      to={internal ? to : null}
      target={internal ? null : target}
      className={className}
      variant={variant}>
      <span className='button'>{children}</span>
      {variant === 'primary' && (
        <svg
          className='angle'
          xmlns='http://www.w3.org/2000/svg'
          width='8.137'
          height='8.137'
          viewBox='0 0 8.137 8.137'>
          <path
            id='Path_23'
            data-name='Path 23'
            d='M4346.518,95.471l-8.137,8.137h8.137Z'
            transform='translate(-4338.381 -95.471)'
            fill='#141c2b'
          />
        </svg>
      )}
    </Wrapper>
  )
}

const Wrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 26px 16px;
  position: relative;
  background-color: ${({ variant }) =>
    variant === 'primary' ? 'var(--color-yellow)' : 'var(--color-transparent)'};
  color: var(--color-blue);
  max-width: 300px;

  @media (max-width: 520px) {
    width: fit-content;
    min-width: 200px;
    padding: 22px 8px;
  }

  width: 100%;
  text-align: center;

  &:hover {
    .angle {
      right: 5px;
      bottom: 5px;
    }
  }

  &.white {
    background-color: var(--color-white);

    path {
      fill: var(--color-yellow);
    }
  }

  > span {
    color: var(--color-blue);
  }

  .angle {
    position: absolute;
    transition: all 0.2s cubic-bezier(0.39, 0.575, 0.565, 1);
    right: 10px;
    bottom: 10px;
  }
`
