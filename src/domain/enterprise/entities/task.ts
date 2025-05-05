import { Entity } from '@/core/entities/entity';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { Optional } from '@/core/types/optional';

interface TaskProps {
  name: string;
  description: string;
  status: string;
  ownerId: UniqueEntityID;
  createdAt: Date;
}

export class Task extends Entity<TaskProps> {
  get name(): string {
    return this.props.name;
  }

  set name(value: string) {
    this.props.name = value;
  }

  get description(): string {
    return this.props.description;
  }

  set description(value: string) {
    this.props.description = value;
  }

  get status(): string {
    return this.props.status;
  }

  set status(value: string) {
    this.props.status = value;
  }

  get ownerId(): UniqueEntityID {
    return this.props.ownerId;
  }

  set ownerId(value: UniqueEntityID) {
    this.props.ownerId = value;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  set createdAt(value: Date) {
    this.props.createdAt = value;
  }

  static create(
    props: Optional<TaskProps, 'createdAt'>,
    id?: UniqueEntityID,
  ): Task {
    return new Task(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    );
  }
}
