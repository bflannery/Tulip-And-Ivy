import React from 'react';
import Gallery from 'react-photo-gallery';

export default class Sample extends React.Component {
    render() {
    return (
        <div className="gallery-page">
        <div className="photo-gallery-container">
          <Gallery className="photo-gallery" photos={FLOWERSET_1} />
        </div>
        </div>
    );
    }
}

const FLOWERSET_1 = [
  {
    src: '../../assets/images/flowerset1-1.jpg',
    width: 600,
    height: 600,
    aspectRatio: 1,
    lightboxImage:{
    src: '../../assets/images/flowerset1-1.jpg',
    srcset: [
      '../../assets/images/flowerset1-1.jpg 1024w',
      '../../assets/images/flowerset1-1.jpg 800w',
      '../../assets/images/flowerset1-1.jpg 500w',
      '../../assets/images/flowerset1-1.jpg 320w',
    ]
    }
  },
  {
    src: '../../assets/images/flowerset1-2.jpg',
    width: 600,
    height: 600,
    aspectRatio: 1,
    lightboxImage:{
    src: '../../assets/images/flowerset1-2.jpg',
    srcset: [
      '../../assets/images/flowerset1-2.jpg 1024w',
      '../../assets/images/flowerset1-2.jpg 800w',
      '../../assets/images/flowerset1-2.jpg 500w',
      '../../assets/images/flowerset1-2.jpg 320w',
    ]
    }
  },
  {
    src: '../../assets/images/flowerset1-3.jpg',
    width: 600,
    height: 600,
    aspectRatio: 1,
    lightboxImage:{
    src: '../../assets/images/flowerset1-3.jpg',
    srcset: [
      '../../assets/images/flowerset1-3.jpg 1024w',
      '../../assets/images/flowerset1-3.jpg 800w',
      '../../assets/images/flowerset1-3.jpg 500w',
      '../../assets/images/flowerset1-3.jpg 320w',
    ]
    }
  },
  {
    src: '../../assets/images/flowerset1-1.jpg',
    width: 600,
    height: 600,
    aspectRatio: 1,
    lightboxImage:{
    src: '../../assets/images/flowerset1-1.jpg',
    srcset: [
      '../../assets/images/flowerset1-1.jpg 1024w',
      '../../assets/images/flowerset1-1.jpg 800w',
      '../../assets/images/flowerset1-1.jpg 500w',
      '../../assets/images/flowerset1-1.jpg 320w',
    ]
    }
  },
  {
    src: '../../assets/images/flowerset1-2.jpg',
    width: 600,
    height: 600,
    aspectRatio: 1,
    lightboxImage:{
    src: '../../assets/images/flowerset1-2.jpg',
    srcset: [
      '../../assets/images/flowerset1-2.jpg 1024w',
      '../../assets/images/flowerset1-2.jpg 800w',
      '../../assets/images/flowerset1-2.jpg 500w',
      '../../assets/images/flowerset1-2.jpg 320w',
    ]
    }
  },
  {
    src: '../../assets/images/flowerset1-3.jpg',
    width: 600,
    height: 600,
    aspectRatio: 1,
    lightboxImage:{
    src: '../../assets/images/flowerset1-3.jpg',
    srcset: [
      '../../assets/images/flowerset1-3.jpg 1024w',
      '../../assets/images/flowerset1-3.jpg 800w',
      '../../assets/images/flowerset1-3.jpg 500w',
      '../../assets/images/flowerset1-3.jpg 320w',
    ]
    }
  }
];