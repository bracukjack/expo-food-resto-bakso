import {ThemedView} from '@/components/ThemedView';
import {Button, ButtonSpinner, ButtonText} from '@/components/ui/button';
import {Box} from '@/components/ui/box';
import {Text} from '@/components/ui/text';
import React from 'react';
import {VStack} from '@/components/ui/vstack';
import {Input, InputField} from '@/components/ui/input';
import {Textarea, TextareaInput} from '@/components/ui/textarea';

export default function HomeScreen() {
  const [isInvalid, setIsInvalid] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('12345');
  const handleSubmit = () => {
    if (inputValue.length < 6) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
  };
  return (
    <ThemedView className="p-5 flex flex-col gap-2">
      <Box className="p-5 flex justify-center items-center bg-gray-700 rounded-lg">
        <Text className="text-typography-0">This is the Box</Text>
      </Box>
      <Button className="w-full px-5 py-2 bg-gray-700 rounded-lg">
        <ButtonSpinner className="color-gray-400" />
        <ButtonText className="font-medium text-sm ml-2">
          Please wait...
        </ButtonText>
      </Button>

      <Button className="w-fit py-1 bg-gray-500 rounded-lg">
        <ButtonText className="font-medium text-sm">Submit</ButtonText>
      </Button>

      <VStack className="w-full max-w-[300px] rounded-md border border-background-200 p-4">
        <Input className="my-1" size={'md'}>
          <InputField type="text" placeholder="kjfdkdj" />
        </Input>

        <Textarea
          size="md"
          isReadOnly={false}
          isInvalid={false}
          isDisabled={false}
          className="w-64">
          <TextareaInput placeholder="Your text goes here..." />
        </Textarea>

        <Button
          className="w-fit self-end mt-4"
          size="sm"
          onPress={handleSubmit}>
          <ButtonText>Submit</ButtonText>
        </Button>
      </VStack>
    </ThemedView>
  );
}
