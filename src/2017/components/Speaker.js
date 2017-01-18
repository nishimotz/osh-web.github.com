import React from 'react'
<<<<<<< HEAD
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
=======
import {Card, CardHeader, CardMedia, CardTitle, CardText, CardActions} from 'material-ui/Card'
>>>>>>> プロフィール修正中
import Chip from 'material-ui/Chip'
import IconButton from 'material-ui/IconButton'
import Markdown from 'react-markdown'

const Chips = ({tags}) => {
    const style = {
        display: 'flex',
        flexWrap: 'wrap',
        paddingTop: 14,
        paddingLeft: 10,
        paddingRight: 10,
    };

    const chip_style = {
        margin: 4,
    };

    const chips = tags.map((tag) => {
        return (
            <Chip style={chip_style}>{tag}</Chip>
        );
    });

    return (
        <div style={style}>
            {chips}
        </div>
    );
};

const Speaker = ({title, name, furi, image, profile, tags, github}) => {
    const titleStyle = ((length) => {
        switch(true) {
            case length > 25:
                return { fontSize: 13, lineHeight: 1.4 };
            case length > 21:
                return { fontSize: 12, lineHeight: '40px' };
            case length > 10:
                return { fontSize: 15, lineHeight: '50px' };
            default:
                return { fontSize: 24, lineHeight: '34px' };
        }
    })(title.length);
    return (
        <Card key={furi}
            style={{maxWidth: 320, margin: 10}}
            initiallyExparded={false}
        >
            <CardMedia overlay={<CardTitle title={<Markdown source={title} />} titleStyle={titleStyle}/>}>
                <img src={image ? image : '/img/2017_no_image@2x.jpg' } role="presentation"/>
            </CardMedia>
            <Chips tags={tags} />
            <CardHeader
                title={name}
                subtitle={furi}
                avatar={image}
                actAsExpander={true}
                showExpandableButton={true}
            >
            </CardHeader>
            <CardText expandable={true}>
                <Markdown source={profile}/>
            </CardText>
            <CardActions>
                <IconButton href={`https://github.com/${github}`} tooltip={github} target="_blank">
                    <i className="fa fa-github" aria-hidden="true"></i>
                </IconButton>
                <i className="fa fa-github" aria-hidden="true"></i>
            </CardActions>
        </Card>
    );
};

export default Speaker
