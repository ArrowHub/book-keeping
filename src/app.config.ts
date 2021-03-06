import { INestApplication, ValidationPipe } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';
import { InternalExceptionFilter } from './middleware/filters/internal-exception.filter';

export const configureApp = (app: INestApplication) => {
  configureValidation(app);
  configureExceptionFilters(app);
};

const configureExceptionFilters = (app: INestApplication) => {
  const i18nService = app.get<I18nService>(I18nService);

  app.useGlobalFilters(new InternalExceptionFilter(i18nService));
};

const configureValidation = (app: INestApplication) => {
  app.useGlobalPipes(new ValidationPipe());
};
