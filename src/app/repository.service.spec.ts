import { TestBed } from '@angular/core/testing';

import { TodoRepository } from './todo.repository';

describe('RepositoryService', () => {
  let service: TodoRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
