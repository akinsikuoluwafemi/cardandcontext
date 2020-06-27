import React from 'react';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
     
        <div className="ui container comments">
          

            <ApprovalCard>
                <CommentDetail name="Tope" time="Today at 6:00" text="Nice blog post" image={faker.image.avatar} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail name="Nike" time="Today at 7:00" text="I like my new job" image={faker.image.avatar} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail name="Timi" time="Today at 2:00" text="God is good" image={faker.image.avatar} />    
            </ApprovalCard>
        </div>           

    )
}

export default App;