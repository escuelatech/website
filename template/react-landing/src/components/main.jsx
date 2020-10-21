import React, { useState, useEffect } from 'react';

const Box = (props) => {
    return (
        <div className="box">
            <a href={props.link} className="image fit">
                <img src={props.image} alt="" />
                </a>
            <div className="inner">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <a href={props.watch} className="button style2 fit"
                    data-poptrox="youtube,800x400">Watch</a>
            </div>
        </div>
    )
}

const Main = () => {

    const [details, setDetails] = useState([
        {
            id: '1',
            link: 'https://www.youtube.com/watch?v=6ZQrpfRuQnM',
            watch: 'https://youtu.be/s6zR2T9vn2c',
            image: require('../assets/css/images/pic01.jpg'),
            title: 'Nascetur nunc varius commodo',
            description: 'Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc. non Mi accumsan.'
        },
        {
            id: '2',
            link: 'https://www.youtube.com/watch?v=6ZQrpfRuQnM',
            watch: 'https://youtu.be/s6zR2T9vn2c',
            image: require('../assets/css/images/pic02.jpg'),
            title: 'Nascetur nunc varius commodo',
            description: 'Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc. non Mi accumsan.'
        },
        {
            id: '3',
            link: 'https://youtu.be/s6zR2T9vn2c',
            watch: 'https://youtu.be/s6zR2T9vn2c',
            image: require('../assets/css/images/pic03.jpg'),
            title: 'Nascetur nunc varius commodo',
            description: 'Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc. non Mi accumsan.'
        },
        {
            id: '4',
            link: 'https://youtu.be/s6zR2T9vn2c',
            watch: 'https://www.youtube.com/watch?v=6ZQrpfRuQnM',
            image: require('../assets/css/images/pic04.jpg'),
            title: 'Nascetur nunc varius commodo',
            description: 'Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc. non Mi accumsan.'
        },
        {
            id: '5',
            link: 'https://youtu.be/s6zR2T9vn2c',
            watch: 'https://youtu.be/6ZQrpfRuQnM',
            image: require('../assets/css/images/pic05.jpg'),
            title: 'Nascetur nunc varius commodo',
            description: 'Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc. non Mi accumsan.'
        },
        {
            id: '6',
            link: 'https://youtu.be/6ZQrpfRuQnM',
            watch: 'https://youtu.be/6ZQrpfRuQnM',
            image: require('../assets/css/images/pic06.jpg'),
            title: 'Nascetur nunc varius commodo',
            description: 'Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc. non Mi accumsan.'
        }
    ]);

    return (
        <div id="main">
		    <div className="inner">
			    <div className="thumbnails">
                    {details.map((detail, index) => {
                        return (
                            <Box key={index} link={detail.link} watch={detail.watch} image={detail.image} title={detail.title} description={detail.description}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Main;