import { Grid, Typography } from "@mui/material";
import React from "react";
import CardBusinessComponent from "./card/CardBusinessComponent";

export default function Cards() {

    const cards = [
        {
            _id: "eafeswfwr2326346tf3254f",
            title: "first",
            subtitle: "subTitle",
            description: "testing",
            phone: "050-1111111",
            email: "text@text.com",
            web: "https://www.test.co.il",
            image: {
                url: "assets/images/business-card-top-image.jpg",
                alt: "image",
            },
            address: {
                state: "TLV",
                country: "Israerl",
                street: "Dizingof",
                houseNumber: 1,
                city: "Tel Aviv",
                zip: 1312,
            },
            bizNumber: 1111111,
            likes: [],
            user_id: "4235234234mfnjrb2h3vbry23",
        },
        {
            _id: "daslfjhbasfjba123124123",
            title: "second",
            subtitle: "subTitle",
            description: "testing",
            phone: "050-1111111",
            email: "text@text.com",
            web: "https://www.test.co.il",
            image: {
                url: "assets/images/business-card-top-image.jpg",
                alt: "image",
            },
            address: {
                state: "TLV",
                country: "Israerl",
                street: "Dizingof",
                houseNumber: 2,
                city: "Tel Aviv",
                zip: 1312,
            },
            bizNumber: 222222,
            likes: [],
            user_id: "4235234234mfnjrb2h3vbry23",
        },
        {
            _id: "asdfaa54sdf158as4ass",
            title: "third",
            subtitle: "subTitle",
            description: "testing",
            phone: "050-1111111",
            email: "text@text.com",
            web: "https://www.test.co.il",
            image: {
                url: "assets/images/business-card-top-image.jpg",
                alt: "image",
            },
            address: {
                state: "TLV",
                country: "Israerl",
                street: "Dizingof",
                houseNumber: 3,
                city: "Tel Aviv",
                zip: 1312,
            },
            bizNumber: 333333,
            likes: [],
            user_id: "4235234234mfnjrb2h3vbry23",
        },
    ];

    // Action Bar functions
    const handleDelete = (id) => {
        console.log(`Card ${id} deleted`);
    }

    const handleEdit = (id) => {
        console.log(`Card ${id} is being edited`);
    }

    const handleLike = (id) => {
        console.log(`Card ${id} liked`);
    }

    if (cards.length === 0) {
        return (
            <Typography>Opps... it seems that there are no business cards to display.</Typography>
        )
    }

    return (
        <>
            <Grid container spacing={2}>
                {cards.map((card, index) => (
                    <Grid item xc={12} s={6} md={4} lg={3} key={index}>
                        <CardBusinessComponent
                            card={card}
                            key={card._id}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                            handleLike={handleLike} />
                    </Grid>
                ))}
            </Grid>


        </>
    );
}