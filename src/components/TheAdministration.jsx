import React from 'react';
import HeaderMessage from './Heading';
import HeadText from './HeadingText';


const TheAdministration = () => {
    return (
      <>
        <div className='common-grid'>
        <div className='admin'>
        <div className='adminHeader'>
        <HeadText headText="The Administration" />
      </div>

        <div>
            <HeaderMessage
                imageSrc="https://www.whitehouse.gov/wp-content/uploads/2021/04/P20210303AS-1901-cropped.jpg?w=150&h=150&crop=1"
                altText="President Biden"
                title="President Biden"
                profileUrl="https://www.whitehouse.gov/administration/president-biden/"

            />
        </div>
        <div>
            <HeaderMessage
                imageSrc="https://www.whitehouse.gov/wp-content/uploads/2021/04/V20210305LJ-0043-cropped.jpg?w=150&h=150&crop=1"
                altText="Harrix"
                title="Voice President Harris"
                profileUrl="https://www.whitehouse.gov/administration/vice-president-harris/"

            />
        </div>
        <div>
            <HeaderMessage
                imageSrc="https://www.whitehouse.gov/wp-content/uploads/2021/01/the_cabinet.jpg?resize=300,300"
                altText="President Biden"
                title="The Cabinet"
                profileUrl="https://www.whitehouse.gov/administration/cabinet/"

            />
        </div>
        <div>
            <HeaderMessage
                imageSrc="https://www.whitehouse.gov/wp-content/uploads/2021/01/executive_office.png?resize=300,300"
                altText="Offices"
                title="Offices"
                profileUrl="https://www.whitehouse.gov/administration/executive-office-of-the-president/"

            />
        </div>
        </div>

    <div className='office'>
      
      <div className='adminHeader'>
      <HeadText headText="The Government" />
    </div>

      <div>
          <HeaderMessage
              imageSrc="https://www.whitehouse.gov/wp-content/uploads/2021/04/P20210303AS-1901-cropped.jpg?w=150&h=150&crop=1"
              altText="President Biden"
              title="President Biden"
              profileUrl="https://www.whitehouse.gov/administration/president-biden/"

          />
      </div>
      <div>
          <HeaderMessage
              imageSrc="https://www.whitehouse.gov/wp-content/uploads/2021/04/V20210305LJ-0043-cropped.jpg?w=150&h=150&crop=1"
              altText="Harrix"
              title="Voice President Harris"
              profileUrl="https://www.whitehouse.gov/administration/vice-president-harris/"

          />
      </div>
      <div>
          <HeaderMessage
              imageSrc="https://www.whitehouse.gov/wp-content/uploads/2021/01/the_cabinet.jpg?resize=300,300"
              altText="President Biden"
              title="The Cabinet"
              profileUrl="https://www.whitehouse.gov/administration/cabinet/"

          />
      </div>
      <div>
          <HeaderMessage
              imageSrc="https://www.whitehouse.gov/wp-content/uploads/2021/01/executive_office.png?resize=300,300"
              altText="Offices"
              title="Offices"
              profileUrl="https://www.whitehouse.gov/administration/executive-office-of-the-president/"

          />
      </div>
      </div>
      </div>
        </>
    );
};

export default TheAdministration;
