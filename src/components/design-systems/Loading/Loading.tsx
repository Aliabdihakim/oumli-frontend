import SpinnerIcon from "@/assets/icons/SpinnerIcon";

const Loading = (props: React.ComponentProps<typeof SpinnerIcon>) => (
  <div
    className="tw-flex tw-shrink-0 tw-items-center tw-justify-center tw-py-16 tw-min-h-screen bg-light-brown"
    data-testid="loading-spinner"
  >
    <SpinnerIcon className="tw-text-primary" {...props} />
  </div>
);

export { Loading };
