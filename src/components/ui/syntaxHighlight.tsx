import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

type SyntaxHighlightProps = {
  code: string;
  language: string;
};

const SyntaxHighlight: React.FC<SyntaxHighlightProps> = ({ code, language }) => {
  return (
    <SyntaxHighlighter wrapLines={true} showLineNumbers={true} language={language} style={materialDark}>
      {code}
    </SyntaxHighlighter>
  );
};

export { SyntaxHighlight };
