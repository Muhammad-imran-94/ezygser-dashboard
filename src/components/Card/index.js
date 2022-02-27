import { Card, CardText, CardBody,
  CardTitle } from 'reactstrap';

const Index = (props) => {
  let{tileTitle , tileInfo}=props;
  return (
    <div>
      <Card className='tiles bg-white rounded d-flex'>
        <CardBody className='p-0 m-0 d-flex flex-column'>
          <CardTitle className='bg-info pt-3 pb-3 text-center h6 m-0 rounded'>{tileTitle}</CardTitle>
          <CardText className='px-3 pt-2 pb-1 h6'>{tileInfo} </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Index;