import Lists from './Lists';

const Mylists = ({lists}) => {
    
    return(
        <div>
        <h1>Le mie liste</h1>
        <Lists lists={lists} />
        </div>
    );

}


export default Mylists;