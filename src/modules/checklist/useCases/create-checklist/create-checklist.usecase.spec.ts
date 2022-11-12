import { randomUUID } from 'crypto';
import { UserRepositoryInMemory } from '../../../users/repositories/infra/implementations/in-memory/user.repository.memory';
import { ChecklistRepositoryInMemory } from '../../repositories/infra/implementations/in-memory/checklist.repository.memory';
import { CreateChecklistUseCase } from './create-checklist.usecase';

let createChecklistUseCase: CreateChecklistUseCase;
let checklistRepositoryInMemory: ChecklistRepositoryInMemory;
let userRepositoryInMemory: UserRepositoryInMemory;

describe('Create checklist', () => {
  beforeEach(() => {
    checklistRepositoryInMemory = new ChecklistRepositoryInMemory();
    createChecklistUseCase = new CreateChecklistUseCase(
      checklistRepositoryInMemory
    );
    userRepositoryInMemory = new UserRepositoryInMemory();
  });

  it('should by able to create new checklist', async () => {
    const user = await userRepositoryInMemory.create({
      name: 'John',
      email: 'john@example.com',
      password: '123',
      company_id: randomUUID(),
    });

    const checklist = {
      name: 'Rocha Engenharia',
      user_id: user.id,
    };

    const checklistCreated = await createChecklistUseCase.execute(
      checklist
    );

    expect(checklistCreated).toHaveProperty('id');
  });
});
