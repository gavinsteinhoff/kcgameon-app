export default function Card({
  title,
  text,
  dangerousText,
  children,
}: {
  title?: string;
  text?: string;
  dangerousText?: string;
  children?: React.ReactNode;
}) {
  let realDangerousText = dangerousText !== undefined ? dangerousText : "";
  return (
    <div className="border-solid border-2 border-primary rounded-xl p-4 mb-5 bg-base-80 drop-shadow-lg">
      <p className="text-3xl text-base-10 font-bold mb-2">{title}</p>
      <div className="text-md text-base-10">{text}</div>
      <div
        className="text-md text-base-10"
        dangerouslySetInnerHTML={{ __html: realDangerousText }}
      />
      {children}
    </div>
  );
}
