
interface ChildProps{
    color: string;

}



export const Child = ({color } : ChildProps) => {
  return <div>{color} child says hello</div> ; 
};