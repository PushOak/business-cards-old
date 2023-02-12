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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, possimus nulla? Doloribus quia quisquam dolorem optio, ratione omnis libero quibusdam vitae eveniet architecto natus eius possimus? Quasi iure error mollitia.
            Doloribus animi corporis ullam quam autem, est libero aspernatur non ex voluptatum soluta dolor! Totam neque eaque odit, delectus in repellat modi numquam et nulla? Quidem itaque totam obcaecati nostrum.
            Consectetur fuga neque illum, sint similique molestias placeat commodi deleniti in. Ipsa ipsum assumenda, nam expedita optio dolore, quibusdam adipisci repellat voluptatibus asperiores exercitationem, explicabo quo atque ut! Rerum, aspernatur?
            Vitae praesentium fuga non assumenda consequuntur ex provident at nobis maxime magni aliquid corrupti nisi hic dignissimos fugit quod a voluptate, voluptatem aspernatur dicta labore repellat ut cum. Consectetur, ducimus?
            Optio, aperiam labore aut sapiente voluptates modi magni, veniam repellendus soluta praesentium voluptate. Consectetur tempora mollitia ipsa illo corporis. Vitae at doloribus odit quam quis nisi officia a fugiat eligendi?

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
