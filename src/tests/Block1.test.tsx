import React from 'react';
import { render , fireEvent } from '@testing-library/react';
import Block1 from '../Components/Block1';

describe('Block1 Component', () => {
  const mockOnTextAreaChange = jest.fn();
  const mockOnShow = jest.fn();

  const setUp = (selectedLabel : string ,userThoughts:string)=>{
   return render(<Block1  onTextAreaChange={mockOnTextAreaChange}
    onShow={mockOnShow}
    selectedLabel={selectedLabel}
    userThoughts={userThoughts} onUserThoughtsChange={jest.fn()}/>)
  }
 
  it('should render the button to view text area', () => {
    const component= setUp('Hexagon','Good');
console.log(component.getByText('Click To view Text Area'));
   fireEvent.click(component.getByText('Click To view Text Area'))
   
   expect(mockOnShow).toHaveBeenCalledTimes(1)

  });


it('should call onTextAreaChange with the correct value when select changes', () => {
    const component= setUp('Hexagon','Good');
   fireEvent.change(component.getByLabelText(/Choose number of Text Areas :/i),{target: { value: '3' }})
   
   expect(mockOnTextAreaChange).toHaveBeenCalledWith(3);

  });

});


//   it('should call onShow when the button is clicked', () => {
//     renderComponent('', '');
//     const button = screen.getByRole('button', { name: /Click To view Text Area/i });
//     fireEvent.click(button);
//     expect(mockOnShow).toHaveBeenCalledTimes(1);
//   });

//   it('should render user thoughts when provided', () => {
//     const userThoughts = 'This is a test thought';
//     renderComponent('', userThoughts);
//     const thoughtsParagraph = screen.getByText(/Here is what User has to say/i).nextElementSibling;
//     expect(thoughtsParagraph).toHaveTextContent(userThoughts);
//   });

//   it('should display selected label when provided', () => {
//     const selectedLabel = 'Test Label';
//     renderComponent(selectedLabel, '');
//     const selectedLabelElement = screen.getByText(/Selected: Test Label/i);
//     expect(selectedLabelElement).toBeInTheDocument();
//   });
//   it('should call onTextAreaChange with the correct value when select changes', () => {
//     renderComponent('', '');
//     const select = screen.getByLabelText(/Choose number of Text Areas/i);
//     fireEvent.change(select, { target: { value: '3' } });
//     expect(mockOnTextAreaChange).toHaveBeenCalledWith(3);
//   });

//   it('should render the correct number of options in the select element', () => {
//     renderComponent('', '');
//     const options = screen.getAllByRole('option');
//     expect(options).toHaveLength(11);
//     options.forEach((option, index) => {
//       expect(option).toHaveValue((index + 1).toString());
//       expect(option).toHaveTextContent((index + 1).toString());
//     });
 // });