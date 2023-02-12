import { Container, Grid } from '@mui/material'
import React from 'react'
import PageHeader from '../components/PageHeader'

export default function AboutPage() {
  return (
    <>
      <Container>
        <PageHeader
          title='About Page'
          subtitle='On this page you can find explanation about using the application'
        />
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} alignSelf='center'>
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur facere aliquam praesentium cum quis. Consectetur temporibus in dicta molestiae porro dolor est totam aut, quos reiciendis explicabo perspiciatis ab quas. Obcaecati natus provident, perspiciatis exercitationem porro ipsum molestiae dolorum, atque aliquam sapiente, laborum ex ut unde. Explicabo aliquid dolorum corrupti earum veniam repellat iure hic amet voluptatem odit nostrum adipisci quaerat eos doloremque maxime architecto unde necessitatibus provident, quo praesentium! Excepturi itaque sed rem ducimus, tempora vel, repudiandae et ad hic necessitatibus numquam voluptatibus atque ullam est. Cum eaque facilis odit consequuntur doloremque autem. Enim tenetur laboriosam delectus libero consectetur.
          </Grid>
          <Grid
            item
            md={4}
            sx={{ display: { md: 'flex', xs: 'none' }, justifyContent: 'center' }}>
            <img src='/assets/images/aboutPage.jpg' alt='card' width='100%' />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
