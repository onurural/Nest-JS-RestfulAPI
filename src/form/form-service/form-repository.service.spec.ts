import { Test, TestingModule } from '@nestjs/testing';
import { FormRepositoryService } from './form-repository.service';

describe('FormRepositoryService', () => {
  let service: FormRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormRepositoryService],
    }).compile();

    service = module.get<FormRepositoryService>(FormRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
