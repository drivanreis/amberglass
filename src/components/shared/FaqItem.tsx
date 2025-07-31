import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FaqItemProps {
  question: string;
  answer: string;
  value: string;
}

const FaqItem = ({ question, answer, value }: FaqItemProps) => {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="text-left font-medium text-gray-900">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-gray-600">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};

export default FaqItem;