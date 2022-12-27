import React from "react"
import styled from "styled-components"
import { Container } from "../atoms/container"
import { textParser } from "../helpers/text-parser"

export default function ServicesGrid({ data: { tytulSekcji, malyNaglowekNadTytulem, listaCoLeczymy } }) {
    return (
        <Wrapper>
            <Container>
                    <span className="text">{malyNaglowekNadTytulem}</span>
                    <h2 className="sub-title" dangerouslySetInnerHTML={{ __html: textParser(tytulSekcji) }} />
                    <Grid>
                        {listaCoLeczymy.map(el => (
                            <Item>
                                <img src={el.grafika.localFile.publicURL} alt={el.grafika.altText} />
                                <p className="big-text" dangerouslySetInnerHTML={{ __html: textParser(el.podpisPodIkona) }}></p>
                            </Item>
                        ))}
                        <Item>
                            <p className="text">Poznaj nasza ofertę</p>
                        </Item>
                    </Grid>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`

    span{
        color: var(--color-yellow);
        font-weight: 700;
        padding-left: 100px;
        padding-right: 100px;
    }

    h2{
        margin-top: 10px;
        margin-bottom: 30px;
        padding-left: 100px;
        padding-right: 100px;
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    position: relative;
    padding-left: 100px;
    padding-right: 100px;

    &::after{
        position: absolute;
        content: "";
        height: 100px;
        width: 1px;
        background-color: var(--color-yellow);
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }

    &::before{
        position: absolute;
        content: "";
        height: 100px;
        width: 1px;
        background-color: var(--color-yellow);
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }
`

const Item = styled.div`
    background-color: var(--color-light-gray);
    padding: 50px 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    img{
        margin-bottom: 24px;
    }

    p{
    }

    &:last-child{
        background-color: var(--color-yellow);
        justify-content: center;
        p{
            font-weight: 700;
            padding-bottom: 10px;
            position: relative;

            &::after{
                position: absolute;
                content: '';
                bottom: 0;
                height: 1px;
                background-color: var(--color-blue);
                left: 50%;
                transform: translateX(-50%);
                width: 50px;
            }
        }
    }
`