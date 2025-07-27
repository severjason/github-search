import { Buttons } from 'src/components';
import { APP_ROUTES } from 'src/core/routes.tsx';

type NotFoundProps = {
  title?: string;
  path?: string;
};

export default function NotFound({ title = 'Page not found', path = APP_ROUTES.root.path }: NotFoundProps) {
  return (
    <div className={'flex flex-1 items-center justify-center flex-col'}>
      <div className="flex flex-col justify-center items-center z-50">
        <h1 className="text-2xl text-secondary-900 text-center">{title}</h1>
        <div className="pt-4">
          <Buttons.Link size="lg" to={path}>
            Back to Home
          </Buttons.Link>
        </div>
      </div>
    </div>
  );
}
