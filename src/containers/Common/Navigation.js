import history from './history';

export const Navigate = (props) =>
{
    if (props.loc){
        console.log(props.loc);
        return history.push(props.loc);
    }
}