import { StatusType } from './constants';

export class UtilService {

  getStatusTypes(): string[] {
    const statusTypes: string[] = [];

    // tslint:disable-next-line:forin
    for (const st in StatusType) {
        statusTypes.push(StatusType[st]);
    }

    return statusTypes;
  }
}
